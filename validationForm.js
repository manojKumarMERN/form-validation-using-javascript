const form = document.querySelector('#form')
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#Email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

function validateInputs() {
    const firstnameVal = firstName.value.trim();
    const lastnameVal = lastName.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true

    if (firstnameVal === '') {
        success = false;
        setError(firstName, ' *firstname is required')
    }
    else {
        setSuccess(firstName)
    }

    if (lastnameVal === '') {
        success = false;
        setError(lastName, '*lastname is required')
    }
    else {
        setSuccess(lastName)
    }

    if (emailVal === '') {
        success = false;
        setError(email, '*Email is required')
    }
    else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, '*Please enter a valid email')
    }
    else {
        setSuccess(email)
    }

    if (passwordVal === '') {
        success = false;
        setError(password, '*Password is required')
    }
    else if (passwordVal.length < 8) {
        success = false;
        setError(password, '*Password must be atleast 8 characters long')
    }
    else {
        setSuccess(password)
    }

    if (cpasswordVal === '') {
        success = false;
        setError(cpassword, '*Confirm password is required')
    }
    else if (cpasswordVal !== passwordVal) {
        success = false;
        setError(cpassword, '*Password does not match')
    }
    else {
        setSuccess(cpassword)
    }

    return success;

}
//element - password, msg- pwd is reqd
function setError(element, message) {
    const inputGroup = element.parentElement;
    //console.log(inputGroup);
    const errorElement = inputGroup.querySelector('.error');
    //console.log(errorElement);

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};


// this script for show and unshow of password 
//in form validation 
//get an element from ids 
function myNewfun() {
    var x = document.getElementById("password")
    var y = document.getElementById("showeye")
    var z = document.getElementById("hideeye")
    //then write condition for x's type is password means 
    // it will convert into text type 
    // and show and unshow of icons
    if (x.type === "password") {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none"
    }
    else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block"
    }


} function myNewfun1() {
    var x = document.getElementById("cpassword")
    var y = document.getElementById("showeyee")
    var z = document.getElementById("hideeyee")

    if (x.type === "password") {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none"
    }
    else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block"
    }
}

