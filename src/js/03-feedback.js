var throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
const emailInputRef = document.querySelector('[name="email"]');
const messageInputRef = document.querySelector('[name="message"]');
const PROP_KEY = 'feedback-form-state';
const parsedLocalStorage = JSON.parse(localStorage.getItem(PROP_KEY));
const data = {};

formRef.addEventListener('input', throttle(handleInput), 500);
formRef.addEventListener('submit', handleSubmit);

function checkLocalStorage() {
  if (parsedLocalStorage?.email) {
    emailInputRef.value = parsedLocalStorage.email;
  }
  if (parsedLocalStorage?.message) {
    messageInputRef.value = parsedLocalStorage.message;
  }
}

checkLocalStorage();

function handleInput(event) {
  data[event.target.name] = event.target.value;
  localStorage.setItem(PROP_KEY, JSON.stringify(data));
}

function handleSubmit(event) {
  event.preventDefault();

  if (emailInputRef.value === '' || messageInputRef.value === '') {
    alert('Заполните, пожалуйста, все поля!');
  }
  console.log(`E-mail: ${parsedLocalStorage.email}, Message: ${parsedLocalStorage.message}`);

  localStorage.removeItem(PROP_KEY);
  formRef.reset();
}
