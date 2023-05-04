import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const { email, message } = formEl.elements;

formEl.addEventListener("input", throttle(() => {
	localStorage.setItem("feedback-form-state", JSON.stringify({email: email.value, message: message.value}));
}, 500));

const localStoregGet = JSON.parse(localStorage.getItem("feedback-form-state", JSON.stringify({email: email.value, message: message.value})));

email.value = localStoregGet.email;
message.value = localStoregGet.message;

formEl.addEventListener("submit", (event) => {
	event.preventDefault();
	const {email, message } = event.currentTarget.elements;
		console.log({email: email.value, message: message.value});
		event.currentTarget.reset();
		localStorage.clear();
	});
