const membershipForm = document.querySelector("#membership-form");
const membershipPreview = document.querySelector("#membership-preview");
const previewContent = document.querySelector("#membership-preview-content");

membershipForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(membershipForm);
  previewContent.textContent = [
    `Player: ${formData.get("name")}`,
    `Parent/guardian email: ${formData.get("email")}`,
    `Age group: ${formData.get("age")}`,
    `Experience: ${formData.get("experience")}`,
    `Interest: ${formData.get("interest")}`,
  ].join("\n");
  membershipPreview.hidden = false;
});
