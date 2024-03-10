const KEY_MESSAGE = "feedback-form-state";
const formRef = document.querySelector('form');

formRef.addEventListener('input', addLocalStorage)
function addLocalStorage() {
    const objMessage = JSON.stringify({ email: formRef.elements.email.value, message: formRef.elements.message.value });
    localStorage.setItem(KEY_MESSAGE, objMessage)    
}

const objMessage = JSON.parse(localStorage.getItem(KEY_MESSAGE)) || {};
formRef.elements.email.value = objMessage.email || '';
formRef.elements.message.value = objMessage.message || '';

formRef.addEventListener('submit', removeLocalStorage)
function removeLocalStorage(event) {
    event.preventDefault(); 
    console.log(JSON.parse(localStorage.getItem(KEY_MESSAGE)));
    localStorage.removeItem(KEY_MESSAGE);
    formRef.elements.email.value = '';
    formRef.elements.message.value = '';
}
 
