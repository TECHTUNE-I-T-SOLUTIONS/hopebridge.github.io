function openForm(type) {
  const modal = document.getElementById("formModal");
  const formTitle = document.getElementById("formTitle");

  // Hide all forms
  const forms = document.querySelectorAll(".form-section");
  forms.forEach((form) => form.classList.add("hidden"));

  // Show correct form
  switch (type) {
    case "volunteer":
      formTitle.textContent = "Volunteer Sign-Up";
      document.getElementById("volunteerForm").classList.remove("hidden");
      break;
    case "partner":
      formTitle.textContent = "Partner With Us";
      document.getElementById("partnerForm").classList.remove("hidden");
      break;
    case "fundraise":
      formTitle.textContent = "Start a Fundraiser";
      document.getElementById("fundraiseForm").classList.remove("hidden");
      break;
    default:
      formTitle.textContent = "Get Involved";
  }

  modal.style.display = "block";
}

function closeForm() {
  const modal = document.getElementById("formModal");
  modal.style.display = "none";
}

// Close modal if clicked outside
window.addEventListener("click", function (e) {
  const modal = document.getElementById("formModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
