// Wait for the DOM to be fully loaded

document.addEventListener('DOMContentLoaded', function() {

    // Initialize animations and functionality

    initAnimations();

    initSkillBars();

    initSmoothScroll();

    initFormValidation();

});

// Initialize animations

function initAnimations() {

    // Animate elements when they come into view

    const animatedElements = document.querySelectorAll('.skill-level, .project-card, .contact-info, .contact-form');

    

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('animate');

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.1

    });

    

    animatedElements.forEach(element => {

        observer.observe(element);

    });

    

    // Add animation to hero text

    const heroText = document.querySelector('.animated-text');

    if (heroText) {

        setTimeout(() => {

            heroText.style.animation = 'none';

            setTimeout(() => {

                heroText.style.animation = 'fadeInUp 1s ease';

            }, 10);

        }, 1000);

    }

}

// Initialize skill bars animation

function initSkillBars() {

    const skillLevels = document.querySelectorAll('.skill-level');

    

    skillLevels.forEach(skill => {

        const width = skill.style.width;

        skill.style.width = '0';

        

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    setTimeout(() => {

                        skill.style.width = width;

                    }, 200);

                    observer.unobserve(entry.target);

                }

            });

        }, {

            threshold: 0.5

        });

        

        observer.observe(skill);

    });

}

// Initialize smooth scrolling for navigation links

function initSmoothScroll() {

    const navLinks = document.querySelectorAll('.nav-links a, .hero-buttons a');

    

    navLinks.forEach(link => {

        link.addEventListener('click', function(e) {

            e.preventDefault();

            

            const targetId = this.getAttribute('href');

            const targetSection = document.querySelector(targetId);

            

            if (targetSection) {

                window.scrollTo({

                    top: targetSection.offsetTop - 80,

                    behavior: 'smooth'

                });

            }

        });

    });

}

// Initialize form validation

function initFormValidation() {

    const contactForm = document.querySelector('.contact-form');

    

    if (contactForm) {

        contactForm.addEventListener('submit', function(e) {

            e.preventDefault();

            

            const nameInput = this.querySelector('input[type="text"]');

            const emailInput = this.querySelector('input[type="email"]');

            const messageInput = this.querySelector('textarea');

            

            let isValid = true;

            

            // Simple validation

            if (!nameInput.value.trim()) {

                highlightError(nameInput);

                isValid = false;

            } else {

                removeHighlight(nameInput);

            }

            

            if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {

                highlightError(emailInput);

                isValid = false;

            } else {

                removeHighlight(emailInput);

            }

            

            if (!messageInput.value.trim()) {

                highlightError(messageInput);

                isValid = false;

            } else {

                removeHighlight(messageInput);

            }

            

            if (isValid) {

                // Simulate form submission

                const submitBtn = this.querySelector('button');

                submitBtn.textContent = 'Sending...';

                submitBtn.disabled = true;

                

                setTimeout(() => {

                    alert('Thank you for your message! I will get back to you soon.');

                    this.reset();

                    submitBtn.textContent = 'Send Message';

                    submitBtn.disabled = false;

                }, 1500);

            }

        });

    }

}

// Helper function to validate email

function isValidEmail(email) {

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return re.test(email);

}

// Helper function to highlight error fields

function highlightError(element) {

    element.style.borderColor = '#ff6b6b';

    element.style.animation = 'shake 0.5s ease';

    

    setTimeout(() => {

        element.style.animation = '';

    }, 500);

}

// Helper function to remove highlight

function removeHighlight(element) {

    element.style.borderColor = '#ddd';

}

// Add shake animation for form errors

const style = document.createElement('style');

style.textContent = `

    @keyframes shake {

        0%, 100% { transform: translateX(0); }

        25% { transform: translateX(-5px); }

        75% { transform: translateX(5px); }

    }

`;

document.head.appendChild(style);