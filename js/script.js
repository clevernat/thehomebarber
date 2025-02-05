document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS for scroll animations
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
  });

  // Dark mode icons
  const sunIcon =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"></circle><line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2"></line><line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2"></line><line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2"></line><line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2"></line></svg>';
  const moonIcon =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" stroke-width="2"></path></svg>';

  // Initialize dark mode toggle buttons
  const modeToggleBtns = document.querySelectorAll(".mode-toggle");
  modeToggleBtns.forEach((btn) => {
    btn.innerHTML = moonIcon;
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      btn.innerHTML = document.body.classList.contains("dark-mode")
        ? sunIcon
        : moonIcon;
      const announcement = document.createElement("div");
      announcement.setAttribute("aria-live", "assertive");
      announcement.className = "sr-only";
      announcement.innerText = document.body.classList.contains("dark-mode")
        ? "Dark mode enabled"
        : "Light mode enabled";
      document.body.appendChild(announcement);
      setTimeout(() => announcement.remove(), 2000);
    });
  });

  // Hamburger Menu Toggle Functionality
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.querySelector(".mobile-nav");

  hamburger.addEventListener("click", function () {
    mobileNav.classList.toggle("show");
  });

  // Modal Functionality with Focus Management
  const modal = document.getElementById("modal");
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementById("closeModal");
  const scheduleAppointmentBtn = document.getElementById("scheduleAppointment");

  function openModal() {
    modal.style.display = "flex";
    modal.querySelector(".modal-content").focus();
  }
  function closeModal() {
    modal.style.display = "none";
    openModalBtn.focus();
  }
  openModalBtn.addEventListener("click", openModal);
  scheduleAppointmentBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
  closeModalBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      closeModal();
    }
  });
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Update formatted date without timezone issues
  function updateFormattedDate(dateElement, displayElement) {
    const [year, month, day] = dateElement.value.split("-");
    const date = new Date(year, month - 1, day);
    const options = { month: "short", day: "numeric" };
    displayElement.textContent = date.toLocaleDateString(undefined, options);
  }
  const dateInput = document.getElementById("date");
  const formattedDateSpan = document.getElementById("formattedDate");
  if (dateInput && formattedDateSpan) {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    mm = mm < 10 ? "0" + mm : mm;
    dd = dd < 10 ? "0" + dd : dd;
    dateInput.value = `${yyyy}-${mm}-${dd}`;
    updateFormattedDate(dateInput, formattedDateSpan);
    dateInput.addEventListener("change", () => {
      updateFormattedDate(dateInput, formattedDateSpan);
    });
  }

  // Footer Date Setup: Display Month (short) and Year in format "Feb 2025"
  const footerDateSpan = document.getElementById("footerDate");
  if (footerDateSpan) {
    const today = new Date();
    const month = today.toLocaleString("default", { month: "short" });
    const year = today.getFullYear();
    footerDateSpan.textContent = `${month} ${year}`;
  }

  // Accessibility Panel Functionality
  const accessibilityToggle = document.getElementById("accessibilityToggle");
  const accessibilityPanel = document.getElementById("accessibilityPanel");
  const increaseFontBtn = document.getElementById("increaseFont");
  const decreaseFontBtn = document.getElementById("decreaseFont");
  const resetFontBtn = document.getElementById("resetFont");
  const toggleContrastBtn = document.getElementById("toggleContrast");
  const toggleDyslexicBtn = document.getElementById("toggleDyslexic");
  const toggleSpacingBtn = document.getElementById("toggleSpacing");

  let currentFontSize = 16; // default font size

  accessibilityToggle.addEventListener("click", function () {
    accessibilityPanel.style.display =
      accessibilityPanel.style.display === "block" ? "none" : "block";
  });

  increaseFontBtn.addEventListener("click", function () {
    currentFontSize += 2;
    document.documentElement.style.fontSize = currentFontSize + "px";
  });
  decreaseFontBtn.addEventListener("click", function () {
    currentFontSize = Math.max(12, currentFontSize - 2);
    document.documentElement.style.fontSize = currentFontSize + "px";
  });
  resetFontBtn.addEventListener("click", function () {
    currentFontSize = 16;
    document.documentElement.style.fontSize = currentFontSize + "px";
  });
  toggleContrastBtn.addEventListener("click", function () {
    document.body.classList.toggle("high-contrast");
  });
  toggleDyslexicBtn.addEventListener("click", function () {
    document.body.classList.toggle("dyslexic");
  });
  toggleSpacingBtn.addEventListener("click", function () {
    document.body.classList.toggle("extra-spacing");
  });

  // Optional: Form submission handling (currently commented out)
  // document.getElementById("bookingForm").addEventListener("submit", function (e) {
  //   e.preventDefault();
  //   const formData = new FormData(this);
  //   const details = Object.fromEntries(formData.entries());
  //   if (!Object.values(details).every(value => value)) {
  //     alert("Please fill in all fields");
  //     return;
  //   }
  //   alert(`Appointment booked for ${details.name} on ${details.date} at ${details.time}`);
  //   this.reset();
  //   closeModal();
  // });
});
