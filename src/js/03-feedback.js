import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

function saveFormState() {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  console.log('Salvează datele:', formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('input', throttle(saveFormState, 500));

const savedData = localStorage.getItem(STORAGE_KEY);
console.log('Date salvate în localStorage:', savedData);

if (savedData) {
  const formData = JSON.parse(savedData);
  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
