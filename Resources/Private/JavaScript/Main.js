import ContentBlocker from "./ContentBlocker";

window.addEventListener("DOMContentLoaded", (event) => {
    ContentBlocker.mount();
    window.ContentBlocker = ContentBlocker;
});


