// =================== MENU TOGGLE ===================
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    
    // Check if the menu is currently visible (right: 0px)
    if(navLinks.style.right === "0px") {
        navLinks.style.right = "-250px"; // Hide it
    } else {
        navLinks.style.right = "0px";    // Show it
    }
}

// =================== SCROLL ANIMATION ===================
const cards = document.querySelectorAll('.animate');

function animateCards() {
    // Trigger point: 90% down the viewport height
    const triggerBottom = window.innerHeight / 1.1;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
}

// Listen for scroll events and initial load
window.addEventListener('scroll', animateCards);
window.addEventListener('load', animateCards);
