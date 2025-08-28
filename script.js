// Auto year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    message.textContent = "✅ Thank you! We'll contact you soon.";
    message.style.color = "#28a745";
    form.reset();
});

// Smooth scroll (2025 feel ✨)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});