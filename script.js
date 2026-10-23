const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// Open and close the mobile navigation menu.
menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after selecting a navigation link.
nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Update the copyright year automatically.
document.getElementById("year").textContent = new Date().getFullYear();

// Demonstration contact form. This does not send data to a server.
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    formMessage.textContent =
        "Thank you! The form works, but no message has been sent. A backend is required to receive messages.";
    contactForm.reset();
});
