import { initForm } from '@formspree/ajax';

initForm({
  formElement: '#contact-form',
  formId: 'mqparwaa',
});
// import axios from 'axios';

const KEY_MESSAGE = 'feedback-form-state';
const formRef = document.querySelector('form');

formRef.addEventListener('input', addLocalStorage);
function addLocalStorage() {
  const objMessage = JSON.stringify({
    email: formRef.elements.email.value.trim(),
    message: formRef.elements.message.value.trim(),
  });
  localStorage.setItem(KEY_MESSAGE, objMessage);
}

const objMessage = JSON.parse(localStorage.getItem(KEY_MESSAGE)) || {};
formRef.elements.email.value = objMessage.email || '';
formRef.elements.message.value = objMessage.message || '';

// formRef.addEventListener('submit', removeLocalStorage);
// async function removeLocalStorage(event) {
//   event.preventDefault();
//   const email = formRef.elements.email.value.trim();
//   const message = formRef.elements.message.value.trim();
//   if (email === '' || message === '') {
//     alert('Заповніть будь-ласка всі поля форми!');
//   } else {
//     console.log({ email, message });
//     try {
//       await axios.post(
//         'https://formsubmit.co/ajax/26637c72cb540d0f5af1348fca764701',
//         {
//           email,
//           message,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//           },
//         }
//       );

//       localStorage.removeItem(KEY_MESSAGE);
//       formRef.reset();

//       alert('Повідомлення успішно надіслано!');
//     } catch (error) {
//       console.error(error);
//       alert('Не вдалося надіслати повідомлення. Спробуйте ще раз.');
//     }
//   }
// }
