thehomebarber - Mobile Barber Service
=====================================

Welcome to the **thehomebarber** project! This repository contains the source code for a modern, responsive mobile barber service website. The website brings the barbershop experience directly to the user's doorstep, complete with smooth animations, dark mode, accessibility enhancements, and more.

* * *

Table of Contents
-----------------

*   [Overview](#overview)
*   [Features](#features)
*   [Technologies Used](#technologies-used)
*   [Project Structure](#project-structure)
*   [Accessibility and Usability](#accessibility-and-usability)
*   [Installation & Setup](#installation--setup)
*   [Customization](#customization)
*   [License](#license)
*   [Acknowledgements](#acknowledgements)

* * *

Overview
--------

The **thehomebarber** website is designed to provide a user-friendly interface for booking mobile barber services. The site offers a seamless experience on both desktop and mobile devices, integrating dynamic content, animations, and accessibility options.

Key functionalities include:

*   **Responsive Design:** Ensures an optimal experience across different devices.
*   **Scroll Animations:** Utilizes AOS (Animate On Scroll) for engaging content transitions.
*   **Dark Mode & Accessibility Options:** Easily toggle between light and dark themes, increase/decrease font sizes, and apply high-contrast or dyslexic-friendly fonts.
*   **Modal for Appointment Booking:** Provides an accessible dialog for booking appointments with focus management and keyboard accessibility.
*   **Dynamic Footer Date:** Automatically updates to display the current month (short format) and year.
*   **Accessible Navigation:** Includes skip navigation links and properly labeled interactive elements to improve keyboard navigation.

* * *

Features
--------

### User Interface & Design

*   **Hero Section:** A visually appealing landing area with a background image overlay and a clear call-to-action to book appointments.
*   **Services Section:** Displays different services offered (e.g., Classic Haircut, Shave & Trim, Beard Styling) with smooth zoom-in animations.
*   **Pricing Section:** Detailed pricing cards with icons, service names, prices, and descriptions.
*   **Appointment Section:** A dedicated section encouraging users to schedule a home appointment.
*   **Contact Section:** Provides contact details and a friendly prompt for further inquiries.

### Modal & Form Functionality

*   **Appointment Booking Modal:** Triggered via "Book Now" and "Schedule Home Appointment" buttons, this modal contains a booking form.
*   **Form Fields:** Includes inputs for name, email, phone, date, time, and service selection. The date field includes real-time formatting to display the selected date.
*   **Accessibility Focus:** The modal includes focus management for keyboard users, ensuring a smooth experience for all.

### Accessibility & Dark Mode

*   **Dark Mode Toggle:** Switch between light and dark themes with an accessible toggle that provides visual feedback (using sun and moon icons).
*   **Accessibility Widget:** A floating button that expands an accessibility panel offering options to:
    *   Increase/Decrease/Reset Font Size
    *   Toggle High Contrast Mode
    *   Toggle Dyslexic-Friendly Font
    *   Toggle Extra Spacing for improved readability

### Responsive Navigation

*   **Desktop & Mobile Navigation:** Implements separate navigation styles for desktop and mobile views. The mobile navigation is toggled using a hamburger menu.
*   **Skip Navigation Link:** Enhances accessibility by allowing users to skip directly to the main content.

* * *

Technologies Used
-----------------

*   **HTML5:** Semantic markup for structure and accessibility.
*   **CSS3:** Custom styles with CSS variables for themes, transitions, and responsiveness.
*   **JavaScript (ES6):** Handles interactivity including modal control, dark mode toggling, accessibility adjustments, and dynamic content updates.
*   **AOS (Animate On Scroll):** For implementing scroll animations.
*   **Google Fonts:** Uses "Roboto Slab" for a clean, modern typography.
*   **OpenDyslexic:** Provides an option for dyslexic-friendly fonts.

* * *

Project Structure
-----------------

```plaintext
thehomebarber/
├── index.html         # Main HTML file containing structure and content
├── css/
│   └── styles.css     # Custom CSS styles including theme variables, responsiveness, and animations
├── js/
│   └── script.js      # JavaScript functionality for modals, dark mode, accessibility, and more
├── images/
│   ├── bg-image.jpg   # Background image for the hero section
│   ├── classic.jpg    # Service image for Classic Haircut
│   ├── trim.jpg       # Service image for Shave & Trim
│   ├── beard.jpg      # Service image for Beard Styling
│   └── favicon.svg    # Favicon of the website
└── README.md          # This file
```

### HTML Structure

*   **Header:** Contains the site logo, navigation (desktop and mobile), and dark mode toggles.
*   **Main Content:** Divided into sections:
    *   **Hero:** Engaging introduction with a call-to-action button.
    *   **Services & Pricing:** Lists services and pricing details with animations.
    *   **Appointment & Contact:** Provides forms and contact information.
*   **Footer:** Displays dynamic date information.
*   **Modal:** A hidden modal that is revealed for booking appointments, including form fields and accessibility considerations.

### CSS Styling

*   **Theme Variables:** Defined using CSS variables for both light and dark modes.
*   **Responsive Layouts:** Media queries ensure that the layout adapts to different screen sizes.
*   **Accessibility Enhancements:** Styles for skip links, focus states, and an accessibility panel.
*   **Animations:** CSS transitions and AOS for smooth scrolling and interactive hover effects.

### JavaScript Functionality

*   **Event Listeners:**
    *   For opening and closing modals.
    *   For toggling dark mode with visual icon feedback.
    *   For handling dynamic date formatting in the booking form and footer.
    *   For managing the accessibility panel interactions (font size, contrast, dyslexic font, extra spacing).
*   **Focus Management:** Ensures that when the modal is opened, focus is correctly handled for keyboard navigation.
*   **Dynamic Content:** Automatically updates form and footer information based on the current date.

* * *

Accessibility and Usability
---------------------------

The project prioritizes accessibility and usability:

*   **Skip Navigation Link:** Enables users to bypass repetitive navigation links.
*   **Keyboard Navigation:** All interactive elements (e.g., modals, toggles, and buttons) are accessible via keyboard.
*   **Aria Attributes:** Proper use of ARIA roles and labels to assist screen readers.
*   **Contrast & Readability:** Options for high contrast mode, extra spacing, and dyslexic-friendly fonts enhance readability.
*   **Responsive Interactions:** Both desktop and mobile experiences are carefully optimized to provide a seamless interaction regardless of device.

* * *

Installation & Setup
--------------------

To set up this project locally:

1.  **Clone the Repository:**
    
    ```bash
    git clone https://github.com/clevernat/thehomebarber.git
    ```
    
2.  **Navigate to the Project Directory:**
    
    ```bash
    cd thehomebarber
    ```
    
3.  **Open `index.html` in Your Browser:**
    
    You can simply open the `index.html` file in your browser, or you can use a local development server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) if using VSCode.
    
4.  **Dependencies:**
    
    The project leverages CDN links for AOS, Google Fonts, and OpenDyslexic, so no additional installation is required.
    

* * *

Customization
-------------

Feel free to customize the project as needed:

*   **Styles:** Modify `css/styles.css` to adjust themes, animations, or layout styles.
*   **Scripts:** Update `js/script.js` to add additional functionality or improve interactions.
*   **Content:** Edit `index.html` to change text, images, or structure according to your needs.
*   **Accessibility Options:** Enhance or extend the accessibility widget features based on user requirements.

* * *

License
-------

This project is licensed under the MIT License. You are free to use, modify, and distribute this code as per the license terms.

* * *

Acknowledgements
----------------

*   **AOS (Animate On Scroll):** For smooth scroll animations.
*   **Google Fonts:** For beautiful typography.
*   **OpenDyslexic:** For providing a dyslexic-friendly font option.
*   **Web Development Communities:** For continuous inspiration and resources that helped in building this project.

* * *

Thank you for checking out **thehomebarber** project! If you have any questions or suggestions, feel free to open an issue or submit a pull request.

Happy coding!
