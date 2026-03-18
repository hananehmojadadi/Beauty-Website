const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

// Info for each service
const serviceInfo = {
  makeup: {
    title: "Professional Makeup",
    text: "Our makeup artists use high-quality products to enhance your natural beauty for weddings, events, or everyday glam.",
  },
  facial: {
    title: "Facial & Skincare",
    text: "Relax with our luxurious facial treatments designed to rejuvenate, hydrate, and brighten your skin.",
  },
  hair: {
    title: "Hair Styling",
    text: "Professional hair styling for every occasion, using modern techniques and trendy looks.",
  },
};

// Open Modal
function openModal(service) {
  modal.style.display = "block";
  modalTitle.textContent = serviceInfo[service].title;
  modalText.textContent = serviceInfo[service].text;
}

// Close Modal
function closeModal() {
  modal.style.display = "none";
}

// Close if click outside
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
