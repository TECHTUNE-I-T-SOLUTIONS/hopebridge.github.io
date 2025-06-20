// ========== Image Carousel ========== //
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

document.querySelectorAll('.nav-links .dropdown > a').forEach(link => {
  link.addEventListener('click', function (e) {
    const dropdown = this.nextElementSibling;
    if (dropdown && window.innerWidth <= 768) {
      e.preventDefault(); // prevent navigation on click
      dropdown.classList.toggle('active');
    }
  });
});
// To close dropdowns when clicking outside
document.addEventListener('click', function (e) {
  const dropdowns = document.querySelectorAll('.nav-links .dropdown > ul');
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(e.target) && !e.target.closest('.nav-links .dropdown > a')) {
      dropdown.classList.remove('active');
    }
  });
});

// // ========== The Navigation Toggle codes ========== //
// document.addEventListener("DOMContentLoaded", function () {
//   const menuToggle = document.querySelector(".menu-toggle");
//   const sidebar = document.getElementById("mobileSidebar");

//   menuToggle.addEventListener("click", () => {
//     sidebar.classList.toggle("active");
//   });

//   // Optional: close sidebar on link click
//   sidebar.querySelectorAll("a").forEach(link => {
//     link.addEventListener("click", () => {
//       sidebar.classList.remove("active");
//     });
//   });
// });

// const overlay = document.getElementById("sidebarOverlay");

// menuToggle.addEventListener("click", () => {
//   sidebar.classList.toggle("active");
//   overlay.classList.toggle("active");
// });

// overlay.addEventListener("click", () => {
//   sidebar.classList.remove("active");
//   overlay.classList.remove("active");
// });



// ========== then, i added animated Counters ========== //
function animateCounter(id, target) {
  const el = document.getElementById(id);
  let count = 0;
  const step = Math.ceil(target / 100);

  const interval = setInterval(() => {
    count += step;
    if (count >= target) {
      el.textContent = target.toLocaleString();
      clearInterval(interval);
    } else {
      el.textContent = count.toLocaleString();
    }
  }, 20);
}




window.addEventListener('load', () => {
  // Initialize Carousel
  showSlide(currentSlide);
  setInterval(nextSlide, 3000);

  // Initialize Animated Counters
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    animateCounter(counter.id, target);
  });

  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  root.setAttribute('data-theme', savedTheme);
});


// ========== Back to Top button ========== //
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== Volunteer Form ========== //
document.getElementById('volunteer-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for signing up to volunteer!');
  this.reset();
});


