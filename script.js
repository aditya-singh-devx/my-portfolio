document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Typing Animation
    if(document.querySelector('.auto-type')) {
        var typed = new Typed(".auto-type", {
            strings: ["Frontend Developer", "Python Enthusiast", "Community Manager"],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true
        });
    }

    // 2. Scroll Fade-In Animation
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // 3. Contact Form Dummy Handler
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerHTML = '<i class="fas fa-check-circle me-2"></i>Message Sent!';
            btn.classList.replace('btn-accent', 'btn-success');
            
            this.reset();
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.replace('btn-success', 'btn-accent');
            }, 3000);
        });
    }

    // 4. Update Active Nav Link on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 5. Scroll Progress Bar
    window.addEventListener('scroll', () => {
        const scrollProgress = document.getElementById('scroll-progress');
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const progress = Math.ceil((scrolled / scrollable) * 100);
        scrollProgress.style.width = `${progress}%`;
    });

    // 6. Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 7. Custom Cursor Effect
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    if (cursorDot && cursorOutline) {
        window.addEventListener('mousemove', function (e) {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Cursor hover effects on links and cards
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-box, .premium-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.width = '60px';
                cursorOutline.style.height = '60px';
                cursorOutline.style.backgroundColor = 'rgba(14, 165, 233, 0.1)';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.width = '40px';
                cursorOutline.style.height = '40px';
                cursorOutline.style.backgroundColor = 'transparent';
            });
        });
    }

    // 8. Initialize Vanilla Tilt (3D Hover Effect for Cards)
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".glass-card, .skill-box, .profile-img-container"), {
            max: 12,
            speed: 400,
            glare: true,
            "max-glare": 0.15,
            scale: 1.02
        });
    }
});