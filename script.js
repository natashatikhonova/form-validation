const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm(){
    //using contraint API
    isValid = form.checkValidity();
    //style main message for an error
    if (!isValid){
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'rgb(207, 36, 5)';
        messageContainer.style.borderColor = 'rgb(207, 36, 5)';
        return;
    }
    //check whether passwords match
    if (password1El.value===password2El.value){
        passwordsMatch = true;
        password1El.style.borderColor = 'rgb(88, 107, 1)';
        password2El.style.borderColor = 'rgb(88, 107, 1)';
    } else{
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.'
        message.style.color = 'rgb(207, 36, 5)';
        messageContainer.style.borderColor = 'rgb(207, 36, 5)';
        password1El.style.borderColor = 'rgb(207, 36, 5)';
        password2El.style.borderColor = 'rgb(207, 36, 5)';
        return;
    }
    //if form is valid and passwords match
    if (isValid && passwordsMatch){
        message.textContent = 'Succesfully Registered!';
        message.style.color = 'rgb(88, 107, 1)';
        messageContainer.style.borderColor = 'rgb(88, 107, 1)';

    }

}

function storeFormData(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
}

function processFormData(e){
    e.preventDefault();
    validateForm();
    //submit data if valid
    if (isValid && passwordsMatch){
        storeFormData();
    }
}
//event listener
form.addEventListener('submit', processFormData);