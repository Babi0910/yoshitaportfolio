// Custom Cursor
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Add a slight delay for the outline for a trailing effect
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Hover effect for cursor
const hoverElements = document.querySelectorAll('a, .btn, .hamburger, .social-btn, .project-card, .pill');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursorOutline.style.width = '65px';
        cursorOutline.style.height = '65px';
        cursorOutline.style.backgroundColor = 'rgba(255, 51, 133, 0.8)';
        cursorOutline.style.borderColor = 'rgba(255, 51, 133, 1)';
        cursorDot.style.width = '0px';
        cursorDot.style.height = '0px';
    });

    element.addEventListener('mouseleave', () => {
        cursorOutline.style.width = '45px';
        cursorOutline.style.height = '45px';
        cursorOutline.style.backgroundColor = 'transparent';
        cursorOutline.style.borderColor = 'var(--accent)';
        cursorDot.style.width = '12px';
        cursorDot.style.height = '12px';
    });
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('nav-active');
    
    // Burger Animation
    hamburger.classList.toggle('toggle');
});

// Close mobile nav when clicking a link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        if(navLinks.classList.contains('nav-active')){
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('toggle');
        }
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

function reveal() {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
// Trigger once on load
reveal();

// Navbar background change on scroll
const nav = document.querySelector('.glass-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'var(--nav-bg-scrolled)';
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
    } else {
        nav.style.background = 'var(--nav-bg)';
        nav.style.boxShadow = 'none';
    }
});

// Typing Effect for Hero Roles
const roles = ["Full-Stack Developer", "Network Architect", "Tech Enthusiast", "Problem Solver"];
const typingText = document.querySelector('.typing-text');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before new word
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect after a short delay
setTimeout(typeEffect, 1000);

// Theme Toggle Logic
const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});
