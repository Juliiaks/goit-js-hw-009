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
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    if (email === "" || message === "") {
        alert("All form fields must be filled in");
        return;
    }
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData && savedData.email && savedData.message) {
        const savedEmail = savedData.email;
        const savedMessage = savedData.message;

        console.log({ email: savedEmail, message: savedMessage });
        event.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
    } else {
        alert("No saved data found")
    }
}