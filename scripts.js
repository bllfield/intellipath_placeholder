document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (navLinks && navLinks.classList.contains('active') && 
        !event.target.closest('nav') && 
        !event.target.closest('.mobile-menu-toggle')) {
      navLinks.classList.remove('active');
      if (mobileMenuToggle) {
        mobileMenuToggle.classList.remove('active');
      }
    }
  });
  
  // Scroll animations
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.section-grid, .feature-cards, .brands-grid, .testimonial, .cta-box');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      
      if (elementPosition < viewportHeight - 100) {
        element.classList.add('fade-in');
      }
    });
  };
  
  // Run once on page load
  animateOnScroll();
  
  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          if (mobileMenuToggle) {
            mobileMenuToggle.classList.remove('active');
          }
        }
      }
    });
  });
  
  // Form submission handling for email signup
  const ctaForm = document.querySelector('.cta-form');
  
  if (ctaForm) {
    ctaForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      
      if (emailInput && emailInput.value) {
        // Here you would normally send the email to your backend
        // For now, we'll just show a success message
        const formContainer = this.parentNode;
        formContainer.innerHTML = '<div class="success-message"><i class="fas fa-check-circle"></i><h3>Thank you for joining!</h3><p>We\'ll keep you updated on our progress.</p></div>';
      }
    });
  }
}); 