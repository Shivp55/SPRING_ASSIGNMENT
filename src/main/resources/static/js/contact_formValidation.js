// Load script
var filerefjs = document.createElement('script');
filerefjs.setAttribute("type", "text/javascript");
filerefjs.setAttribute("src", "https://unpkg.com/sweetalert/dist/sweetalert.min.js");
function validate_form(event) {
    event.preventDefault();

    var i;
    var name = document.getElementById("name");
    var email = document.getElementById('emailid');
    var address = document.getElementById('address');
    var phone = document.getElementById('phone');
    
    //function check names
    if (name.value == null || name.value == "") {
        alert("Please enter a valid name");
        document.getElementById('fname').style.borderColor = "red"
        name.focus();
        return false;
    }
    else {
        document.getElementById('name').style.borderColor = "green"
    }
    // Validating phone number
    if (phone.value.length < 1 || phone.value.length > 10) {
        alert("Invalid phone number");
        document.getElementById('ph.no').style.borderColor = "red"
        phone.focus();
        return false;
    } else {
        document.getElementById('ph.no').style.borderColor = "green"
    }

    //Validating Address
    if (address.value == null || address.value == "") {
        alert("Please enter a valid address");
        document.getElementById('addr').style.borderColor = "red"
        address.focus();
        return false;
    }
    else {
        document.getElementById('addr').style.borderColor = "green"
    }
    if(ValidateEmail()==true) {
    var btn = document.getElementById("submit");
    btn.innerHTML = "<div class='loader'></div>";

    // Start a timer for the animation to finish
    var timeout = setTimeout(function () {
        console.log("work done");

        // When the work is done, reset the button to original state
        btn.innerHTML = 'Submit';

        // After the animation finishes, show SweetAlert
        swal({
            title: "Account Created",
            text: "Please Check the table below to confirm your account",
            icon: "success",
            button: "OK",
        });
        
        document.getElementById("Contact-us-form").reset();
    }, 3000);

    // Clear the timeout if the button is clicked before the animation finishes
    btn.addEventListener('click', function () {
        clearTimeout(timeout);
        btn.innerHTML = 'Create Account'; // Reset button text
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

