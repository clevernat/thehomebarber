// Initialize AOS with custom settings
document.addEventListener('DOMContentLoaded', function() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: true,
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  }
});
