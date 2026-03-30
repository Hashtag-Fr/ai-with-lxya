/* ============================================
   AI With Lxya - Main JavaScript
   Minimal, Clean, Performant
   ============================================ */

(function() {
    'use strict';

    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }

    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just '#'
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // NEWSLETTER FORM HANDLING
    // ============================================
    
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const submitButton = this.querySelector('.newsletter-button');
            const email = emailInput.value.trim();
            
            // Basic email validation
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Subscribing...';
            
            // Simulate API call (replace with your actual implementation)
            setTimeout(() => {
                showNotification('Thank you for subscribing! Check your email for confirmation.', 'success');
                emailInput.value = '';
                submitButton.disabled = false;
                submitButton.textContent = 'Subscribe';
            }, 1500);
            
            // In production, replace the setTimeout with actual API call:
            // fetch('/api/subscribe', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email: email })
            // })
            // .then(response => response.json())
            // .then(data => {
            //     if (data.success) {
            //         showNotification('Thank you for subscribing!', 'success');
            //         emailInput.value = '';
            //     } else {
            //         showNotification('Subscription failed. Please try again.', 'error');
            //     }
            // })
            // .catch(error => {
            //     showNotification('An error occurred. Please try again.', 'error');
            // })
            // .finally(() => {
            //     submitButton.disabled = false;
            //     submitButton.textContent = 'Subscribe';
            // });
        });
    }

    // ============================================
    // CATEGORY FILTER
    // ============================================
    
    const categoryButtons = document.querySelectorAll('.category-btn');
    const postItems = document.querySelectorAll('.post-item');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter posts
            postItems.forEach(post => {
                if (category === 'all' || post.getAttribute('data-category') === category) {
                    post.style.display = 'block';
                    post.classList.add('fade-in');
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });

    // ============================================
    // CONTACT FORM HANDLING
    // ============================================
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = this.querySelector('#name');
            const emailInput = this.querySelector('#email');
            const messageInput = this.querySelector('#message');
            const submitButton = this.querySelector('.contact-submit-btn');
            
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();
            
            // Validation
            if (name === '' || email === '' || message === '') {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            // Simulate API call (replace with your actual implementation)
            setTimeout(() => {
                showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            }, 1500);
            
            // In production, replace with actual form submission:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ name, email, message })
            // })
            // .then(response => response.json())
            // .then(data => {
            //     if (data.success) {
            //         showNotification('Message sent successfully!', 'success');
            //         contactForm.reset();
            //     } else {
            //         showNotification('Failed to send message. Please try again.', 'error');
            //     }
            // })
            // .catch(error => {
            //     showNotification('An error occurred. Please try again.', 'error');
            // })
            // .finally(() => {
            //     submitButton.disabled = false;
            //     submitButton.textContent = 'Send Message';
            // });
        });
    }

    // ============================================
    // UTILITY FUNCTIONS
    // ============================================
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showNotification(message, type = 'info') {
        // Remove existing notification if any
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#6366F1'};
            color: white;
            border-radius: 0.75rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            font-weight: 500;
            max-width: 400px;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 4 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }
    
    // Add notification animations to document
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ============================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ============================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe blog cards and post items
    document.querySelectorAll('.blog-card, .post-item, .stat-item').forEach(element => {
        observer.observe(element);
    });

    // ============================================
    // ACTIVE NAV LINK ON SCROLL
    // ============================================
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function setActiveNavLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNavLink);

    // ============================================
    // LAZY LOADING IMAGES
    // ============================================
    
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Add fade-in effect when image loads
                    img.addEventListener('load', () => {
                        img.style.opacity = '1';
                    });
                    
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.3s';
                    
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }

    // ============================================
    // LOG INITIALIZATION
    // ============================================
    
    console.log('%c AI With Lxya ', 'background: linear-gradient(135deg, #667EEA 0%, #764BA2 100%); color: white; font-size: 16px; font-weight: bold; padding: 10px 20px; border-radius: 5px;');
    console.log('Website initialized successfully!');

})();
