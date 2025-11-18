document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('section, .card, .hero-text, .hero-image').forEach(el => {
        el.classList.add('animate-in'); // Initially add class but control with delay/opacity in CSS if needed
        // Actually, let's reset opacity in JS if we want to trigger it on scroll, 
        // but since we have 'animate-in' class in CSS with animation, we might want to toggle a class like 'visible'
        // Let's adjust:
        el.style.opacity = '0';
        el.classList.remove('animate-in');
        observer.observe(el);
    });

    // Re-define observer callback to add the class back
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '';
                entry.target.classList.add('animate-in');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .card, .hero-text, .hero-image').forEach(el => {
        scrollObserver.observe(el);
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
