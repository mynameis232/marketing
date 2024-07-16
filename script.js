// Get the button and modal elements
const contactBtn = document.getElementById('contact-btn');
const contactModal = document.getElementById('contact-modal');

// Add an event listener to the button
contactBtn.addEventListener('click', () => {
  // Show the modal window
  contactModal.style.display = 'block';
});

// Add an event listener to the modal window to close it when clicked outside
window.addEventListener('click', (event) => {
  if (event.target === contactModal) {
    contactModal.style.display = 'none';
  }
});


const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const formData = new FormData(contactForm);

  // Replace 'your_getform_io_form_id' with your actual getform.io form ID
  fetch('https://getform.io/f/your_getform_io_form_id', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      successMessage.textContent = 'Form submitted successfully!';
    } else {
      successMessage.textContent = 'Error submitting form. Please try again later.';
    }
  })
  .catch(error => {
    console.error('Error:', error);
    successMessage.textContent = 'Error submitting form. Please try again later.';
  });
});


// slider javascript 

const cards = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');

// Add event listeners to the cards and dots
cards.forEach((card, index) => {
  card.addEventListener('mouseover', () => {
    // Show the overlay on hover
    card.querySelector('.card-overlay').style.display = 'block';
  });
  
  card.addEventListener('mouseout', () => {
    // Hide the overlay on mouseout
    card.querySelector('.card-overlay').style.display = 'none';
  });
  
  dots[index].addEventListener('click', () => {
    // Update the active dot and slide to the corresponding card
    updateActiveDot(index);
    slideToCard(index);
  });
});

// Update the active dot
function updateActiveDot(index) {
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });
  dots[index].classList.add('active');
}

// Slide to the corresponding card
function slideToCard(index) {
  const cardWidth = cards[0].offsetWidth;
  const sliderWidth = document.querySelector('.slider-cards').offsetWidth;
  const slidePosition = index * cardWidth;
  
  document.querySelector('.slider-cards').style.transform =` translateX(-${slidePosition}px)`;
}

// photo slider 

// Get the image container and content points
const imageContainer = document.getElementById('image');
  const contentPoints = document.querySelectorAll('.content-point');
  
  // Define the image URLs for each content point
  const imageUrls = {
    'point1': 'https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:62beadb2-fac2-491b-90d9-5bc90d77ae70;revision=0?component_id=d3bbd022-01ea-4ba9-9820-b2affd08ae48&api_key=CometServer1&access_token=1721072642_urn%3Aaaid%3Asc%3AUS%3A62beadb2-fac2-491b-90d9-5bc90d77ae70%3Bpublic_133ad07519680dd224801849e79ae7a3874639f8',
    'point2': 'https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:62beadb2-fac2-491b-90d9-5bc90d77ae70;revision=0?component_id=2719ca30-70a5-4501-b09b-b89f311ee379&api_key=CometServer1&access_token=1721072642_urn%3Aaaid%3Asc%3AUS%3A62beadb2-fac2-491b-90d9-5bc90d77ae70%3Bpublic_133ad07519680dd224801849e79ae7a3874639f8',
    'point3': 'https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:62beadb2-fac2-491b-90d9-5bc90d77ae70;revision=0?component_id=4f643a93-0623-4c49-99f6-5dce246be43c&api_key=CometServer1&access_token=1721072642_urn%3Aaaid%3Asc%3AUS%3A62beadb2-fac2-491b-90d9-5bc90d77ae70%3Bpublic_133ad07519680dd224801849e79ae7a3874639f8'
    // Add more image URLs as needed
  };
  
  // Add event listeners to the content points
  contentPoints.forEach(point => {
    point.addEventListener('click', () => {
      // Get the ID of the clicked content point
      const pointId = point.id;
  
      // Update the image source
      imageContainer.src = imageUrls[pointId];
  
      // Highlight the clicked content point
      contentPoints.forEach(p => p.classList.remove('active'));
      point.classList.add('active');
    });
  });

