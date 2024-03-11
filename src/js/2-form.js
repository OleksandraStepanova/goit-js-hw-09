import validator from "validator";

const KEY_MESSAGE = "feedback-form-state";
const formRef = document.querySelector('form');


formRef.addEventListener('input', addLocalStorage)
function addLocalStorage() {    
    const objMessage = JSON.stringify({ email: formRef.elements.email.value.trim(), message: formRef.elements.message.value.trim()});
    localStorage.setItem(KEY_MESSAGE, objMessage)    
}

const objMessage = JSON.parse(localStorage.getItem(KEY_MESSAGE)) || {};
formRef.elements.email.value = objMessage.email || '';
formRef.elements.message.value = objMessage.message || '';

formRef.addEventListener('submit', removeLocalStorage)
function removeLocalStorage(event) {
    event.preventDefault();
    if (validator.isEmpty(formRef.elements.email.value) || validator.isEmpty(formRef.elements.message.value)) {
        alert('Заповніть будь-ласка всі поля форми!')
    }
    else {
        console.log(JSON.parse(localStorage.getItem(KEY_MESSAGE)));
        localStorage.removeItem(KEY_MESSAGE);
        formRef.elements.email.value = '';
        formRef.elements.message.value = '';
    }    
}
 
