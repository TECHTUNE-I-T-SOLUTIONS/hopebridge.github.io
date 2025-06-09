function openForm(type) {
  const modal = document.getElementById("formModal");
  const formTitle = document.getElementById("formTitle");

  switch (type) {
    case "volunteer":
      formTitle.textContent = "Volunteer Sign-Up";
      break;
    case "partner":
      formTitle.textContent = "Partner With Us";
      break;
    case "fundraise":
      formTitle.textContent = "Start a Fundraiser";
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

// To close the modal when clicking outside the modal box
window.addEventListener("click", function (e) {
  const modal = document.getElementById("formModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
