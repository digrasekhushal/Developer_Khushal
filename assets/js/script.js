// Dropdown Toggle
const languageBtn = document.querySelector("button");
const dropdown = document.querySelector(".dropdown-content");
languageBtn.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle("hidden");
}

// ======= Categories ======= //

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("product-slider");
  const prevButton = document.getElementById("prevBtn");
  const nextButton = document.getElementById("nextBtn");
  let scrollAmount = 0;
  const itemWidth = 136; // width of each item + padding (32px + 8px each side)

  // Auto Scroll every 3 seconds
  const autoScrollInterval = setInterval(() => {
    if (scrollAmount < slider.scrollWidth - slider.clientWidth) {
      scrollAmount += itemWidth;
      slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
    } else {
      // Loop back to the start
      scrollAmount = 0;
      slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  }, 3000); // Adjust timing for auto-scroll interval

  // Next button click event
  nextButton.addEventListener("click", () => {
    if (scrollAmount < slider.scrollWidth - slider.clientWidth) {
      scrollAmount += itemWidth;
      slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
    } else {
      // Loop back to the start
      scrollAmount = 0;
      slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  });

  // Prev button click event
  prevButton.addEventListener("click", () => {
    if (scrollAmount > 0) {
      scrollAmount -= itemWidth;
      slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
    } else {
      // Loop to the end
      scrollAmount = slider.scrollWidth - slider.clientWidth;
      slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  });
});

// =-=-=-=-=-=

// Auto-slide functionality for each slider
let autoSlideInterval;

function autoSlide(sliderId, scrollAmount) {
  autoSlideInterval = setInterval(() => {
    document
      .getElementById(sliderId)
      .scrollBy({ left: scrollAmount, behavior: "smooth" });
  }, 3000); // Auto slide every 3 seconds
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Start auto slide for all sliders
autoSlide("slider1", 150);
autoSlide("slider2", 150);
autoSlide("slider3", 150);

// Add event listeners for prev and next buttons
document.getElementById("prevBtn1").addEventListener("click", () => {
  stopAutoSlide();
  document
    .getElementById("slider1")
    .scrollBy({ left: -150, behavior: "smooth" });
  autoSlide("slider1", 150); // Restart auto slide
});

document.getElementById("nextBtn1").addEventListener("click", () => {
  stopAutoSlide();
  document
    .getElementById("slider1")
    .scrollBy({ left: 150, behavior: "smooth" });
  autoSlide("slider1", 150); // Restart auto slide
});

document.getElementById("prevBtn2").addEventListener("click", () => {
  stopAutoSlide();
  document
    .getElementById("slider2")
    .scrollBy({ left: -150, behavior: "smooth" });
  autoSlide("slider2", 150); // Restart auto slide
});

document.getElementById("nextBtn2").addEventListener("click", () => {
  stopAutoSlide();
  document
    .getElementById("slider2")
    .scrollBy({ left: 150, behavior: "smooth" });
  autoSlide("slider2", 150); // Restart auto slide
});

document.getElementById("prevBtn3").addEventListener("click", () => {
  stopAutoSlide();
  document
    .getElementById("slider3")
    .scrollBy({ left: -150, behavior: "smooth" });
  autoSlide("slider3", 150); // Restart auto slide
});

document.getElementById("nextBtn3").addEventListener("click", () => {
  stopAutoSlide();
  document
    .getElementById("slider3")
    .scrollBy({ left: 150, behavior: "smooth" });
  autoSlide("slider3", 150); // Restart auto slide
});



 const slider = document.getElementById('product-slider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Scroll by a specific amount when buttons are clicked
  prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -250, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 250, behavior: 'smooth' });
  });