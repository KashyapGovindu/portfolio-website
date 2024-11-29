// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links (only for hash links)
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
            }
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add fade-in animation for headings
    document.querySelectorAll('h1, h2, h3').forEach(heading => {
        heading.style.opacity = '0';
        heading.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heading.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heading.style.opacity = '1';
            heading.style.transform = 'translateY(0)';
        }, 100);
    });

    // Add terminal-like effect to project descriptions
    document.querySelectorAll('.project-description').forEach(desc => {
        const text = desc.textContent.trim();
        desc.innerHTML = `<span class="cursor">></span> ${text}`;
    });

    // Add hover effect for tech tags
    document.querySelectorAll('.tech-tag').forEach(tag => {
        tag.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        tag.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add scroll reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .experience-item, .publication-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });

    // Add dynamic year to footer
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.innerHTML = footer.innerHTML.replace('2024', new Date().getFullYear());
    }
});
