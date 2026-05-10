// ===============================
// BINALONAN WEBSITE MAIN SCRIPT
// ===============================

// Smooth scrolling for anchor links (#section)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        if (targetId && targetId !== "#") {
            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});


// ===============================
// CONTACT FORM HANDLER (if exists)
// ===============================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name")?.value || "";
        const email = document.getElementById("email")?.value || "";
        const message = document.getElementById("message")?.value || "";

        alert(
            "Message Sent Successfully!\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Message: " + message
        );

        contactForm.reset();
    });
}


// ===============================
// IMAGE LAZY LOADING (SAFE)
// ===============================
const images = document.querySelectorAll("img[data-src]");

if (images.length > 0) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove("lazy");
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}


// ===============================
// VIDEO ERROR SAFE HANDLER
// ===============================
const videos = document.querySelectorAll("video");

videos.forEach(video => {
    video.addEventListener("error", () => {
        console.log("Video failed to load:", video.currentSrc);
    });

    video.addEventListener("loadeddata", () => {
        console.log("Video loaded successfully");
    });
});


// ===============================
// MOBILE MENU (if you add hamburger later)
// ===============================
const navLinks = document.querySelector(".nav-links");

const menuToggle = document.querySelector(".menu-toggle");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}