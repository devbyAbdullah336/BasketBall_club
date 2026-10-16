const contactForm = document.querySelector("#contact-form");
const contactPreview = document.querySelector("#contact-preview");
const previewContent = document.querySelector("#contact-preview-content");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  previewContent.textContent = [
    `Name: ${formData.get("name")}`,
    `Email: ${formData.get("email")}`,
    `Topic: ${formData.get("topic")}`,
    "",
    formData.get("message"),
  ].join("\n");
  contactPreview.hidden = false;
});
