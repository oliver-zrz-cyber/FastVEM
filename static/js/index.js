// Disable VideoJS help popup
window.HELP_IMPROVE_VIDEOJS = false;

// Initialize carousel when document is ready
document.addEventListener('DOMContentLoaded', function() {
  // Carousel configuration options
  var options = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    willChange: true,
    buttons: true,
    dots: true,
  };

  // Check if we're in a browser that supports bulmaCarousel
  if (typeof bulmaCarousel !== 'undefined') {
    // Initialize all carousels
    var carousels = bulmaCarousel.attach('.carousel', options);
  }

  // Initialize bulmaSlider if available
  if (typeof bulmaSlider !== 'undefined') {
    bulmaSlider.attach();
  }

  // Smooth scroll behavior for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
});

// jQuery ready function (fallback for jQuery code)
$(document).ready(function() {
  // Check for click events on the navbar burger icon
  var options = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  // Initialize all div with carousel class
  if (typeof bulmaCarousel !== 'undefined') {
    var carousels = bulmaCarousel.attach('.carousel', options);
  }

  // Attach bulmaSlider
  if (typeof bulmaSlider !== 'undefined') {
    bulmaSlider.attach();
  }

  // Add active state to links when scrolling
  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY + 100;

    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Could highlight corresponding nav item if nav exists
      }
    });
  });
});

// Helper function to load images lazily
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when page loads
window.addEventListener('load', lazyLoadImages);
