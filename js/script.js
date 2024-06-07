// JavaScript Document

$(document).ready(function(){
	/***** Start Header section *****/
	$("section.header div.menu_icon").click(function(){
		$("section.header nav ul.list").slideToggle();
	});
	
	$("section.header nav ul.list li.list_item a").click(function(){
		$("html,body").animate({
			scrollTop:$("#"+$(this).data("value")).offset().top - 15,
		},1500);
	});
	/***** End Header section *****/
	
	/***** Start Sticy section *****/
	$(window).scroll(function(){
		var scroll_top = $(this).scrollTop();
		
		if(scroll_top >= 256){
			$("section.sticy").slideDown("linear");
		}else{
			$("section.sticy").slideUp("linear");
		}
	});
	/***** End Sticy section *****/
	
	/***** Start Doctors Section *****/
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
/***** End Doctors Section *****/
	
	/***** Start Contact Section *****/
	
	// hide ( div.contact_form ) and show ( div.section_create_new_account )
	$("section.contact div.contact_form form div.link_to_create_new_account p").click(function(){
		$("section.contact div.contact_form").slideUp(1000,"linear");
		$("section.contact div.section_create_new_account").delay(1100).slideDown(1000,"linear");
	});
	
	// hide ( div.section_create_new_account ) and show ( div.contact_form )
	$("section.contact div.section_create_new_account form div.i_have_an_account p").click(function(){
		$("section.contact div.section_create_new_account").slideUp(1000,"linear");
		$("section.contact div.contact_form").delay(1100).slideDown(1000,"linear");
	});
	/***** End Contact Section *****/
	
	/***** Start an_arrow_to_top Section *****/
	$("#an_arrow_to_top").click(function(){
		$("html,body").animate({
			scrollTop:"0px",
		},1500);
	});
	
	$(window).scroll(function(){
		var scroll_top = $(this).scrollTop();
		if(scroll_top >= 580){
			$("#an_arrow_to_top").fadeIn();
		}else{
			$("#an_arrow_to_top").fadeOut();
		}
		
	});
	/***** End an_arrow_to_top Section *****/
	
	/***** Start Wow.js Plugin *****/
	new WOW().init();
	/***** End Wow.js Plugin *****/
});

/***** Start Contact Section *****/

// check about Regular Expressions in input ( Normal Sign in )
function sing_in(){
	
	var user_email = document.getElementById("user_email").value;
	var Email_waring = document.getElementById("waring_email");
	
	var user_password = document.getElementById("user_password").value;
	var password_waring = document.getElementById("waring_password");
	
	// regular expressions ( check the user's email )
	var reg_exp = new RegExp();
		reg_exp = /^[A-Z]+[a-z0-9_]+@+[a-zA-Z0-9]+\.+[a-zA-Z0-9]/;
	var result = reg_exp.test(user_email);
	
	if(result == false){
		Email_waring.style = "display:block; color:darkred; font-weight:bold;";
		Email_waring.innerHTML = "Please, you must write the first letter in capital letters";
		
	}if(user_email == ""){
		Email_waring.style = "display:block; color:darkred; font-weight:bold;";
		Email_waring.innerHTML = "Please, write your Email";
		
	}else if(result == true){
		Email_waring.style = "display:block; color:green; font-weight:bold;";
		Email_waring.innerHTML = "Done, Welcome";
		
		
		// regular expressions ( check the user's password )
		reg_exp = /[^0-9]/;
		result = reg_exp.test(user_password);
		
		if(result == true){
			password_waring.style = "display:block; color:darkred; font-weight:bold;";
			password_waring.innerHTML = "Please, write only Numbers";
			
		}if(user_password == ""){
			password_waring.style = "display:block; color:darkred; font-weight:bold;";
			password_waring.innerHTML = "Please, write your password";
			
		}else if(result == false){
			password_waring.style = "display:block; color:green; font-weight:bold;";
			password_waring.innerHTML = "Done, Welcome";
		}	
	}		
}



// check about Regular Expressions in input ( Create New Account )
function create_new_account(){
	
	/******** Start get inputs ********/
	var user_first_name_in_create_account = document.getElementById("user_first_name_in_create_account").value;
	var user_last_name_in_create_account = document.getElementById("user_last_name_in_create_account").value;
	var user_email_in_create_account = document.getElementById("user_email_in_create_account").value;
	var user_confirm_email_in_create_account = document.getElementById("user_confirm_email_in_create_account").value;
	var user_phone_in_create_account = document.getElementById("user_phone_in_create_account").value;
	/******** End get inputs ********/
	
	
	/******** Start errot sections ********/
	var waring_first_name_in_create_account = document.getElementById("waring_first_name_in_create_account");
	var waring_last_name_in_create_account = document.getElementById("waring_last_name_in_create_account");
	var waring_email_in_create_account = document.getElementById("waring_email_in_create_account");
	var waring_confirm_email_in_create_account = document.getElementById("waring_confirm_email_in_create_account");
	var waring_phone_in_create_account = document.getElementById("waring_phone_in_create_account");
	/******** End errot sections ********/
	
	var reg_exp = new RegExp();
		reg_exp = /^[A-Z]+[a-z]/;
	var result = reg_exp.test(user_first_name_in_create_account);
	
	if(result == false){
		waring_first_name_in_create_account.style = "display:block; color:darkred; font-weight:bold;";
		waring_first_name_in_create_account.innerHTML = "Please, you must write the first letter in capital letters, and you must write characters only";
		
	}if(user_first_name_in_create_account == ""){
		waring_first_name_in_create_account.style = "display:block; color:darkred; font-weight:bold;";
		waring_first_name_in_create_account.innerHTML = "please, write your first name";
		
	}else if(result == true){
		waring_first_name_in_create_account.style = "display:block; color:green; font-weight:bold;";
		waring_first_name_in_create_account.innerHTML = "Done";
		
		
		
		// ******** Start regular expressions about ( user last name ) ********
		reg_exp = /^[A-Z]+[a-z]/;
		result = reg_exp.test(user_last_name_in_create_account);
		
		if(result == false){
			waring_last_name_in_create_account.style = "display:block; color:darkred; font-weight:bold;";
			waring_last_name_in_create_account.innerHTML = "Please, you must write the first letter in capital letters, and you must write characters only";
		
		}if(user_last_name_in_create_account == ""){
			waring_last_name_in_create_account.style = "display:block; color:darkred; font-weight:bold;";
			waring_last_name_in_create_account.innerHTML = "please, write your first name";
		
		}else if(result == true){
			waring_last_name_in_create_account.style = "display:block; color:green; font-weight:bold;";
			waring_last_name_in_create_account.innerHTML = "Done";
			
			
			
			// ******** Start regular expressions about ( user email ) ********
			reg_exp = /^[A-Z]+[a-z0-9_]+@+[a-zA-Z0-9]+\.+[a-zA-Z0-9]/;
			result = reg_exp.test(user_email_in_create_account);
			
			if(result == false){
				waring_email_in_create_account.style = "display:block; color:darkred; font-weight:bold;";
				waring_email_in_create_account.innerHTML = "Please, you must write the first letter in capital letters";
				
			}if(user_email_in_create_account == ""){
				waring_email_in_create_account.style = "display:block; color:darkred; font-weight:bold;";
				waring_email_in_create_account.innerHTML = "Please, write your email";
				
			}else if(result == true){
				waring_email_in_create_account.style = "display:block; color:green; font-weight:bold;";
				waring_email_in_create_account.innerHTML = "Done";
				
				
				
				// ******** Start regular expressions about ( user confirm email ) ********
				reg_exp = /^[A-Z]+[a-z0-9_]+@+[a-zA-Z0-9]+\.+[a-zA-Z0-9]/;
				result = reg_exp.test(user_confirm_email_in_create_account);
				
				if(result == false){
					waring_confirm_email_in_create_account.style = "display:block; color:darkred; font-weight:bold";
					waring_confirm_email_in_create_account.innerHTML = "Please, you must write the first letter in capital letters";
					
				}if(user_confirm_email_in_create_account == ""){
					waring_confirm_email_in_create_account.style = "display:block; color:darkred; font-weight:bold";
					waring_confirm_email_in_create_account.innerHTML = "Please, Dictate this input and write your email again";
					
				}else if(result == true){
					waring_confirm_email_in_create_account.style = "display:block; color:green; font-weight:bold";
					waring_confirm_email_in_create_account.innerHTML = "Done";
					
					
					// ******** Start regular expressions about ( user Phone ) ********
					reg_exp = /[^0-9]/;
					result = reg_exp.test(user_phone_in_create_account);
					
					if(result == true){
						waring_phone_in_create_account.style = "display:block; color:darkred; font-weight:bold";
						waring_phone_in_create_account.innerHTML = "Please, write your Phone Number only";
						
					}if(user_phone_in_create_account == ""){
						waring_phone_in_create_account.style = "display:block; color:darkred; font-weight:bold";
						waring_phone_in_create_account.innerHTML = "Please, Dictate this input and write your Phone Number";
						
					}else if(result == false){
						waring_phone_in_create_account.style = "display:block; color:green; font-weight:bold";
						waring_phone_in_create_account.innerHTML = "Done";
					}
					// ******** End regular expressions about ( user Phone ) ********	
				}
				// ******** End regular expressions about ( user confirm email ) ********	
			}
			// ******** End regular expressions about ( user email ) ********	
		}
		// ******** End regular expressions about ( user last name ) ********	
	}	
}
/***** End Contact Section *****/