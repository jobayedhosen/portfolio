/* 
    Interactions for Jobayed Hosen Portfolio
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scroll for Navigation
    const navLinks = document.querySelectorAll('.nav-links a, .cta-group a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Account for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.skill-card, .project-card, .section-head, .hero-text, .hero-image');
    
    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealOnScroll.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => {
        // Initial state
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        revealOnScroll.observe(el);
    });

    // 3. Header Background Change on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(2, 6, 23, 0.95)';
            header.style.padding = '10px 0';
        } else {
            header.style.background = 'rgba(2, 6, 23, 0.8)';
            header.style.padding = '0';
        }
    });

    // 4. Staggered reveal for skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
});
