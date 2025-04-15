// Main script file that loads all other scripts
document.addEventListener("DOMContentLoaded", function () {
  console.log("All scripts loaded successfully");

  // Test if all required DOM elements are present
  const elementsToCheck = [
    "darkModeToggle",
    "mobileMenuButton",
    "mobileMenu",
    "customerName",
    "customerPhone",
    "customerEmail",
    "addressInput",
    "appointmentDate",
    "appointmentTime",
    "bookAppointment",
    "confirmationModal",
    "successModal",
    "modalDetails",
  ];

  const missingElements = elementsToCheck.filter(
    (id) => !document.getElementById(id)
  );

  if (missingElements.length > 0) {
    console.warn("Missing DOM elements:", missingElements);
  } else {
    console.log("All required DOM elements are present");
  }
});

// Note: We're using separate script tags in the HTML file instead of ES modules
// because we're not using a bundler in this project.
