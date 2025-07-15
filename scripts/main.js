// Main JavaScript for Assembleia de Deus Vale das Virtudes

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const hamburger = mobileMenuBtn.querySelector('.hamburger');
    const close = mobileMenuBtn.querySelector('.close');

    mobileMenuBtn.addEventListener('click', function() {
        const isOpen = !mobileNav.classList.contains('hidden');
        
        if (isOpen) {
            // Close menu
            mobileNav.classList.add('hidden');
            hamburger.classList.remove('hidden');
            close.classList.add('hidden');
        } else {
            // Open menu
            mobileNav.classList.remove('hidden');
            hamburger.classList.add('hidden');
            close.classList.remove('hidden');
        }
    });

    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.add('hidden');
            hamburger.classList.remove('hidden');
            close.classList.add('hidden');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mobileNav.contains(event.target);
        const isClickOnButton = mobileMenuBtn.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnButton && !mobileNav.classList.contains('hidden')) {
            mobileNav.classList.add('hidden');
            hamburger.classList.remove('hidden');
            close.classList.add('hidden');
        }
    });
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('#header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'var(--card)';
        header.style.backdropFilter = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.pillar-card, .schedule-card, .feature-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Active navigation state
function setActiveNavigation() {
    const currentPath = window.location.pathname;
    const fileName = currentPath.split('/').pop() || 'index.html';
    
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current page link
    document.querySelectorAll(`a[href="${fileName}"], a[href="${currentPath}"]`).forEach(link => {
        if (link.classList.contains('nav-link') || link.classList.contains('mobile-nav-link')) {
            link.classList.add('active');
        }
    });
}

// Set active navigation on page load
document.addEventListener('DOMContentLoaded', setActiveNavigation);

// Form validation (for contact forms)
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });
    
    return isValid;
}

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation (Brazilian format)
function validatePhone(phone) {
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    return phoneRegex.test(phone);
}

// Format phone number as user types
function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length <= 11) {
        if (value.length <= 2) {
            value = value.replace(/(\d{0,2})/, '($1');
        } else if (value.length <= 6) {
            value = value.replace(/(\d{2})(\d{0,4})/, '($1) $2');
        } else if (value.length <= 10) {
            value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else {
            value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
        }
    }
    
    input.value = value;
}

// WhatsApp link generation
function generateWhatsAppLink(message = '') {
    const phoneNumber = '5511999999999';
    const defaultMessage = 'Olá! Gostaria de saber mais sobre a Assembleia de Deus Vale das Virtudes.';
    const finalMessage = message || defaultMessage;
    
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
}

// Utility function to show notifications
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        font-weight: 500;
        z-index: 1000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#10b981';
            break;
        case 'error':
            notification.style.backgroundColor = '#ef4444';
            break;
        case 'warning':
            notification.style.backgroundColor = '#f59e0b';
            break;
        default:
            notification.style.backgroundColor = '#3b82f6';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Export functions for use in other scripts
window.ChurchUtils = {
    validateForm,
    validateEmail,
    validatePhone,
    formatPhoneNumber,
    generateWhatsAppLink,
    showNotification
};