import gsap from 'gsap';

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .step, .pricing-card');
    
    elements.forEach(element => {
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
            }
        });
    });
};

// Hero section animations
const animateHero = () => {
    const tl = gsap.timeline();
    
    tl.from('.hero-content h1', {
        opacity: 0,
        y: 30,
        duration: 1
    })
    .from('.hero-content p', {
        opacity: 0,
        y: 20,
        duration: 0.8
    }, '-=0.5')
    .from('.cta-buttons', {
        opacity: 0,
        y: 20,
        duration: 0.8
    }, '-=0.5')
    .from('.hero-image', {
        opacity: 0,
        x: 50,
        duration: 1
    }, '-=0.8');
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    animateHero();
    animateOnScroll();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

