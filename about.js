// Fade-in timeline items on scroll
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  const revealOnScroll = () => {
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8) {
        item.classList.add("visible");
      }
    });
  };

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);
});
