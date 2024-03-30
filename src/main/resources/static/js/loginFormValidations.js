// Load script
var filerefjs = document.createElement('script');
filerefjs.setAttribute("type", "text/javascript");
filerefjs.setAttribute("src", "https://unpkg.com/sweetalert/dist/sweetalert.min.js");
function validate_form(event) {
    event.preventDefault();

    var i;
    var email = document.getElementById('emailid');
    var password = document.getElementById('password');
    var pwd = password.value;
    
    //Validating Password
    if (pwd.length === 0) {
        alert("You must enter a valid password");
        document.getElementById('pwd').style.borderColor = "red"
        password.focus();
        return false;
    }
    else {
        document.getElementById('pwd').style.borderColor = "green"
    }

    if (pwd.length < 6) {
        alert("Length of Password must be greater than 6 characters");
        document.getElementById('pwd').style.borderColor = "red"
        password.focus();
        return false;
    }
    else {
        document.getElementById('pwd').style.borderColor = "green"
    }

    //Condition if email validated commit the changes aND ADD THE DATA
    if(ValidateEmail()==true) {
    

    var btn = document.getElementById("loginbtn");
    btn.innerHTML = "<div class='loader'></div>";

    // Start a timer for the animation to finish
    var timeout = setTimeout(function () {
        console.log("work done");

        // When the work is done, reset the button to original state
        btn.innerHTML = 'Login';
        storeUserSignInData(email, password);
        document.getElementById("login").reset();
    }, 3000);

    // Clear the timeout if the button is clicked before the animation finishes
    btn.addEventListener('click', function () {
        clearTimeout(timeout);
        btn.innerHTML = 'Login'; // Reset button text
    });
}


}


//Validating email
function ValidateEmail(mail) {
    var mail = document.getElementById("emailid");
    //alert(mail.value);

    const emailRegex = /^[\w.-]+@[A-Za-z\d.-]+\.[A-Za-z]{2,}$/;
    if (emailRegex.test(mail.value)) {
        return true;
    }
    else {
        alert('invalid email');
        document.getElementById('email').style.borderColor = "red"
        mail.focus();
        return false;
    }
}
//Show/Hide Password
function show_Hide(check_box) {
    var val = document.getElementById("password");
    if (check_box.checked) {
        val.setAttribute("type", 'text');
    }
    else {
        val.setAttribute("type", 'password');
    }
}