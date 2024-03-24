const form = document.querySelector(".feedback-form");
const input = form.querySelector("input");
const textarea = form.querySelector("textarea")

const STORAGE_KEY = "feedback-form-state"

document.addEventListener("DOMContentLoaded", () => {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData) {
        input.value = savedData.email;
        textarea.value = savedData.message;
    }
});

 
form.addEventListener("submit", handleSubmit);
form.addEventListener("input", enteredText);

function enteredText(event) {
    const data = event.currentTarget;
    const email = data.elements.email.value;
    const message = data.elements.message.value;

    const formData = { email: email.trim(), message: message.trim() };

localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleSubmit(event) {
    event.preventDefault();
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const email = savedData.email;
    const message = savedData.message;
    if (email === "" || message === "") {
        alert("All form fields must be filled in");
        return;
    }
    console.log({ email: email, message: message});
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}