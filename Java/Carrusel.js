/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".nav-dot");
  const prevBtn = document.querySelector(".carousel-button.prev");
  const nextBtn = document.querySelector(".carousel-button.next");

  let currentIndex = 0;
  let totalSlides = slides.length;

  function goToSlide(index) {
    // Pausar videos
    slides.forEach(slide => {
      const video = slide.querySelector("video");
      if (video) video.pause();
    });

    currentIndex = (index + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[currentIndex]) dots[currentIndex].classList.add("active");

    const currentSlide = slides[currentIndex];
    const video = currentSlide.querySelector("video");
    if (video) video.play().catch(() => {});
  }

  prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      goToSlide(parseInt(dot.getAttribute("data-index")));
    });
  });

  // Auto slide
  setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 7000);

  goToSlide(0);
});




