import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const formKey = 'feedback-form-state';
const formObj = {};

forminputUpdate();

const formInput = function(event) {
    formObj[event.target.name] = event.target.value;
    localStorage.setItem(formKey, JSON.stringify(formObj) )
}


const formSubmit = function(event) {
    event.preventDefault();
    
    const {
        elements: { email, message }
    } = event.currentTarget;
    
    if (email.value == '' || message.value == '') {
        return alert('Please fill in all the fields!!')
    }
    console.log(formObj);
    event.currentTarget.reset();
    localStorage.removeItem(formKey);
}

form.addEventListener('input', throttle(formInput, 500));
form.addEventListener('submit', formSubmit);





function forminputUpdate() {
const dataUpdate = JSON.parse(localStorage.getItem(formKey));
    if(dataUpdate) {
        console.log(dataUpdate.email || '');
        console.log(dataUpdate.message || '');

        email.value = dataUpdate.email || '';
        message.value = dataUpdate.message || '';
    }
}