function previewMultipleImages(event) {
  const files = event.target.files;
  const gallery = document.getElementById("gallery-preview");
  gallery.innerHTML = "";

  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = function () {
      const img = document.createElement("img");
      img.src = reader.result;
      gallery.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
}

function handleContactForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("form-response");

  if (name && email && message) {
    response.textContent = `Thank you, ${name}! Your message has been received.`;
    response.style.color = "green";
    document.getElementById("contact-form").reset();
  } else {
    response.textContent = "Please fill in all fields.";
    response.style.color = "red";
  }
}
