import"./assets/styles-bb4b5058.js";const t=document.querySelector(".feedback-form"),r=t.querySelector("input"),n=t.querySelector("textarea"),a="feedback-form-state";t.addEventListener("submit",c);t.addEventListener("input",s);function s(e){const o=e.target.value;localStorage.setItem(a,o)}function c(e){e.preventDefault(),console.log({email:r.value,message:n.value}),e.currentTarget.reset(),localStorage.removeItem(a)}
//# sourceMappingURL=commonHelpers2.js.map
