const form = document.querySelector(".feedback-form");
const email = form.querySelector("input");
const message = form.querySelector("textarea")

const STORAGE_KEY = "feedback-form-state"

 
form.addEventListener("submit", handleSubmit);
form.addEventListener("input", enteredText);
// input.addEventListener("input", enteredText);
// textarea.addEventListener("input", enteredText);

function enteredText(event) {
const messageText = event.target.value;
localStorage.setItem(STORAGE_KEY, messageText);
}

function handleSubmit(event) {
    event.preventDefault();
    console.log({ email: email.value, message: message.value });
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}