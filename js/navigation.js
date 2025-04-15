// Toggle mobile menu when hamburger icon is clicked
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", function () {
      const mobileMenu = document.getElementById("mobileMenu");
      const expanded = this.getAttribute("aria-expanded") === "true" || false;
      this.setAttribute("aria-expanded", !expanded);
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        // Close mobile menu if open
        const mobileMenu = document.getElementById("mobileMenu");
        if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
          document
            .getElementById("mobileMenuButton")
            .setAttribute("aria-expanded", "false");
        }
      }
    });
  });
});
