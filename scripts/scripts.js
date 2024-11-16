
// Add hover animations on the buttons
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("mouseenter", () => {
        gsap.to(button, {
            borderColor: "rgba(255, 105, 180, 1)",
            duration: 0.5,
            borderWidth: "4px",
            scale: 1.1,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)"
        });
    });

    button.addEventListener("mouseleave", () => {
        gsap.to(button, {
            borderColor: "transparent",
            duration: 0.5,
            borderWidth: "2px",
            scale: 1.0,
            boxShadow: "none"
        });
    });
});

// Menu button and fade-in effect for menu
const menuButton = document.getElementById('menu-button');
const navbarMenu = document.getElementById('navbar-menu');

menuButton.addEventListener('click', () => {
    if (navbarMenu.classList.contains('hidden')) {
        navbarMenu.classList.remove('hidden');
        navbarMenu.classList.add('visible');
        gsap.fromTo(navbarMenu, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    } else {
        closeMenuWithFadeOut();
    }
});

// Hide the menu with fade-out effect
navbarMenu.addEventListener('mouseleave', () => {
    closeMenuWithFadeOut();
});

// Function to close the menu with fade-out animation
function closeMenuWithFadeOut() {
    gsap.to(navbarMenu, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            navbarMenu.classList.add('hidden');
            navbarMenu.classList.remove('visible');
        }
    });
}

// Close the menu when clicking outside
document.addEventListener('click', (event) => {
    if (!navbarMenu.contains(event.target) && event.target !== menuButton) {
        closeMenuWithFadeOut();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            gsap.to(window, {
                scrollTo: { y: targetElement.offsetTop, autoKill: true },
                duration: 1,
                ease: "power2.inOut"
            });
        }
    });
});

// Suppression des animations de l'en-tête
// Aucun gsap.from ou autre animation n'est appliqué à <header>, <h1> ou <p>.
