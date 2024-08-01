//for letters only
$.validator.addMethod("letters", function(value, element) {
    return this.optional(element) || value == value.match(/^[a-z0-9A-Z0-9\s-#&()]*$/);
});

//for email only
$.validator.addMethod("emailtest", function(value, element) {
    return this.optional(element) || /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i.test(value);
});

$(document).ready(function(){
    $("#submit_form").validate({
       rules: {
                username: {
                    required: true,
                    minlength: 3,
                    maxlength: 35,
                    letters: true
                },
                 password: {
                    maxlength: 10,
                    minlength: 10,
                   required: true
                },
                 conformpassword: {
                    required: true,
                    equalTo: "#password"
                },
                mobileno: {
                    required: true,
                    minlength: 10,
                    maxlength: 10,
                    digits: true
                },
                emailid: {
                    emailtest: true,
                    required: true,
                    email: true
                },
                website: {
                    required: true,
                    url: true
                },
                test1:"required"
            },

            messages: {
                username: {
                    required: "username field is required",
                    letters: "Must character only",
                    maxlength: "Please enter 35 Characters only"
                },
                emailid: {
                    required: "email field is required",
                    email: "Please enter a valid email id",
                    emailtest: "Please enter a valid email address"
                },
                password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 10 characters long"
                },
                conformpassword: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 8 characters long",
                    equalTo: "Please enter the same password as above"
                },
                mobileno: {
                    digits: "Please enter a valid mobile number",
                    minlength: "Please enter 10 digits only",
                    maxlength: "Please enter 10 digits only"
                },
            }
    });
});