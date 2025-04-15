document.addEventListener("DOMContentLoaded", function () {
  const addressInput = document.getElementById("addressInput");
  const addressSuggestions = document.getElementById("addressSuggestions");
  const customerName = document.getElementById("customerName");
  const customerPhone = document.getElementById("customerPhone");
  const customerEmail = document.getElementById("customerEmail");
  const appointmentDate = document.getElementById("appointmentDate");
  const appointmentTime = document.getElementById("appointmentTime");
  const bookAppointmentBtn = document.getElementById("bookAppointment");
  const confirmationModal = document.getElementById("confirmationModal");
  const successModal = document.getElementById("successModal");
  const modalDetails = document.getElementById("modalDetails");
  const serviceCards = document.querySelectorAll("#serviceList > div");

  // Check if booking elements exist on the page
  if (!appointmentDate || !appointmentTime) {
    return; // Exit if booking elements don't exist
  }

  let selectedService = null;
  const mockAddresses = [
    "123 Main Street, Denver, CO 80202",
    "456 Pearl Street, Boulder, CO 80302",
    "789 College Avenue, Fort Collins, CO 80524",
    "321 Tejon Street, Colorado Springs, CO 80903",
    "654 Havana Street, Aurora, CO 80010",
    "987 Wadsworth Boulevard, Lakewood, CO 80226",
    "741 University Avenue, Denver, CO 80210",
    "852 Broadway Street, Boulder, CO 80304",
    "963 Mountain Avenue, Fort Collins, CO 80521",
    "159 Nevada Avenue, Colorado Springs, CO 80903",
    "753 Colfax Avenue, Denver, CO 80204",
    "951 Lincoln Street, Brighton, CO 80601",
    "357 Washington Street, Golden, CO 80401",
    "846 Market Street, Englewood, CO 80110",
    "264 Union Boulevard, Lakewood, CO 80228",
  ];

  const today = new Date();
  appointmentDate.min = today.toISOString().split("T")[0];

  function generateTimeSlots() {
    appointmentTime.innerHTML = '<option value="">Choose a time slot</option>';
    const slots = [];
    for (let hour = 8; hour < 20; hour++) {
      for (let minute of ["00", "30"]) {
        slots.push(`${hour.toString().padStart(2, "0")}:${minute}`);
      }
    }
    slots.forEach((slot) => {
      const option = document.createElement("option");
      option.value = slot;
      option.textContent = slot;
      appointmentTime.appendChild(option);
    });
  }
  generateTimeSlots();

  // Enhanced service card selection with animation
  serviceCards.forEach((card) => {
    card.addEventListener("click", () => {
      serviceCards.forEach((c) => {
        c.classList.remove("border-primary", "bg-primary/5");
        c.querySelector(".service-radio").innerHTML = "";
      });
      card.classList.add("border-primary", "bg-primary/5");
      card.querySelector(".service-radio").innerHTML =
        '<div class="w-3 h-3 bg-primary rounded-full"></div>';
      selectedService = {
        name: card.dataset.service,
        duration: parseInt(card.dataset.duration),
        price: parseInt(card.dataset.price),
      };
      updateSummary();
    });
  });

  function updateSummary() {
    const nameVal = customerName.value;
    const phoneVal = customerPhone.value;
    const emailVal = customerEmail.value;
    const addressVal = addressInput.value;
    const dateVal = appointmentDate.value;
    const timeVal = appointmentTime.value;
    const allFilled =
      selectedService &&
      dateVal &&
      timeVal &&
      addressVal &&
      nameVal &&
      phoneVal &&
      emailVal;
    bookAppointmentBtn.disabled = !allFilled;
  }

  [
    customerName,
    customerPhone,
    customerEmail,
    addressInput,
    appointmentDate,
    appointmentTime,
  ].forEach((input) => {
    input.addEventListener("input", updateSummary);
    input.addEventListener("change", updateSummary);
  });

  bookAppointmentBtn.addEventListener("click", () => {
    if (!selectedService) {
      modalDetails.innerHTML = `<p>Please select a service first.</p>`;
      confirmationModal.style.display = "flex";
      return;
    }
    const details = `
      <p class="mb-2"><strong>Customer:</strong> ${customerName.value}</p>
      <p class="mb-2"><strong>Phone:</strong> ${customerPhone.value}</p>
      <p class="mb-2"><strong>Email:</strong> ${customerEmail.value}</p>
      <p class="mb-2"><strong>Address:</strong> ${addressInput.value}</p>
      <p class="mb-2"><strong>Date & Time:</strong> ${appointmentDate.value} at ${appointmentTime.value}</p>
      <p class="mb-2"><strong>Service:</strong> ${selectedService.name}</p>
      <p class="mb-2"><strong>Duration:</strong> ${selectedService.duration} mins</p>
      <p class="mb-2"><strong>Total:</strong> ${selectedService.price}</p>
    `;
    modalDetails.innerHTML = details;
    confirmationModal.style.display = "flex";
  });

  document
    .getElementById("confirmBooking")
    .addEventListener("click", () => {
      confirmationModal.style.display = "none";
      successModal.style.display = "flex";
    });
  document
    .getElementById("cancelBooking")
    .addEventListener("click", () => {
      confirmationModal.style.display = "none";
    });
  document
    .getElementById("closeSuccess")
    .addEventListener("click", () => {
      successModal.style.display = "none";
      serviceCards.forEach((card) => {
        card.classList.remove("border-primary", "bg-primary/5");
        card.querySelector(".service-radio").innerHTML = "";
      });
      selectedService = null;
      appointmentDate.value = "";
      appointmentTime.value = "";
      addressInput.value = "";
      customerName.value = "";
      customerPhone.value = "";
      customerEmail.value = "";
      updateSummary();
    });
});
