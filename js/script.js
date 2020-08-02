var btn = document.getElementById('confirm');

var firstName = document.getElementById('first');
var lastName = document.getElementById('last');
var password = document.getElementById('password');

var firstError = document.getElementById('first-error');
var lastError = document.getElementById('last-error');
var passwordError = document.getElementById('password-error');


var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
var email = document.getElementById('email');
var emailError = document.getElementById('email-error');


function check(input, error) {
    if ( input.value == "" ) {
        error.innerHTML = "This feild can't be empty" ;
        input.style.border = "1px solid #ff0000";
        error.style.color = "#ff0000";
        input.style.margin = "10px 0 0  0";
        error.style.margin = "0";
    } else {
        error.innerHTML = "";
        input.style.border = "1px solid #666"; 
    };
};

function checkEmail() {
    if ( !email.value.match(emailFormat)){
        emailError.innerHTML = "Email is not valid"
        email.style.border= "1px solid #ff0000";
        emailError.style.color = "#ff0000";
        email.style.margin = "10px 0 0  0";
        emailError.style.margin = "0";
    } else {
        emailError.innerHTML = "";
        email.style.border = "1px solid #666";
    };
};

btn.addEventListener('click', function (event) {
    event.preventDefault();
    check(firstName , firstError );
    check(lastName , lastError);
    check(password , passwordError);
    checkEmail();
});


