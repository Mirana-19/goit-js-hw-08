var throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
const emailInputRef = document.querySelector('[name="email"]');
const messageInputRef = document.querySelector('[name="message"]');
const PROP_KEY = 'feedback-form-state';
const parsedLocalStorage = JSON.parse(localStorage.getItem(PROP_KEY));

formRef.addEventListener('input', throttle(handleInput), 500);
// не могу понять, почему не работает throttle, подскажите, пожалуйста, мучаюсь уже долго :)

function checkLocalStorage() {
  if (localStorage.getItem(PROP_KEY)) {
    emailInputRef.value = parsedLocalStorage.email;
    messageInputRef.value = parsedLocalStorage.message;
  }
}

checkLocalStorage();

function handleInput(event) {
  const {
    elements: { email, message },
  } = event.currentTarget;

  const savedMessage = { email: email.value, message: message.value };

  localStorage.setItem(PROP_KEY, JSON.stringify(savedMessage));
  console.log(localStorage);
}

function handleSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(PROP_KEY);
  formRef.reset();
}
