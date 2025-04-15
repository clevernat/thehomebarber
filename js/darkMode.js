// Tailwind configuration for dark mode
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3A5199", // Updated modern blue
        secondary: "#FF6B6B", // Updated vibrant accent color
        tertiary: "#4ECDC4", // New teal accent color
        dark: "#2D3748", // Dark shade for text
        light: "#F7FAFC", // Light shade for backgrounds
      },
      borderRadius: {
        none: "0px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        full: "9999px",
      },
      boxShadow: {
        custom:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        hover:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
};

// Initialize dark mode based on user preference or system setting
if (
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Toggle dark mode and update localStorage and toggle icon.
function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
  const toggleIcon = document.getElementById("darkModeIcon");
  const toggleIconMobile = document.getElementById("darkModeIconMobile");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleIcon.className = "fa-solid fa-sun text-xl";
    toggleIconMobile.className = "fa-solid fa-sun text-xl";
  } else {
    localStorage.setItem("theme", "light");
    toggleIcon.className = "fa-solid fa-moon text-xl";
    toggleIconMobile.className = "fa-solid fa-moon text-xl";
  }
}

// Expose the toggleDarkMode function globally
window.toggleDarkMode = toggleDarkMode;
