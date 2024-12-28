document.addEventListener("DOMContentLoaded", function() {
    const message = document.getElementById("message");

    // Fade in "Hello Zeon"
    message.style.opacity = 1;

    // After 5 seconds, fade out "Hello Zeon" and fade in the next message
    setTimeout(() => {
        message.style.opacity = 0;
        setTimeout(() => {
            message.textContent = "How is this for a first website, bitch";
            message.style.opacity = 1;
        }, 5000); // Wait for the fade-out transition to complete
    }, 5000); // Wait for the initial fade-in to complete
});