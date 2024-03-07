//javscript
const form = document.getElementById("form");
const username = document.getElementById("Username");
const email = document.getElementById("e-mail");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("Confirm-password");
const submit = document.getElementById("btn");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmpasswordValue = confirmpassword.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (emailValue === ''){
        setError(email, 'E-mail is required')
    }
    else if(!validateEmail(emailValue)){
        setError(email, 'Please provide an valid E-mail Address')
    }
    else{
        setSuccess(email)
        clearError(email)
    }

    if (passwordValue === ''){
        setError(password, 'Password is required');
    }
    else if (passwordValue.length<8) {
        setError(password, 'Password length should be a minimum of 8 words')
    }
    else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(passwordValue)) {
        setError(password, 'Password should contain at least one special character');
    } else {
        setSuccess(password);
        clearError(password)
    }

    if (confirmpasswordValue === ''){
        setError(confirmpassword, 'confirm Password is required')

    }
    else if(confirmpasswordValue !== passwordValue){
        setError(confirmpassword, 'Confirm Password should be same as password')
    }
    else{
        setSuccess(confirmpassword);
        clearError(confirmpassword);
    }
    
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';

    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

const clearError = setSuccess()

const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}