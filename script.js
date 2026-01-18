/**
 * Take Me Anywhere Button - Minimal JS
 * Handles mobile touch interaction with animation before navigation
 */

(function() {
  'use strict';
  
  const button = document.querySelector('.take-me-anywhere');
  if (!button) return;
  
  const targetUrl = button.getAttribute('href');
  const animationDuration = 400; // ms
  
  // Detect touch device
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (isTouchDevice) {
    button.addEventListener('touchstart', function(e) {
      // Add active class for animation
      this.classList.add('active-touch');
    }, { passive: true });
    
    button.addEventListener('touchend', function(e) {
      e.preventDefault();
      
      // Keep animation visible briefly, then navigate
      setTimeout(() => {
        window.location.href = targetUrl;
      }, animationDuration);
    });
    
    // Remove class if touch cancelled
    button.addEventListener('touchcancel', function() {
      this.classList.remove('active-touch');
    }, { passive: true });
  }
})();
