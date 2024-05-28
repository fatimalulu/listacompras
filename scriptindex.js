const carousel = document.querySelector('.image-carousel');
const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
const slideIndicators = document.querySelector('.slide-indicators');

let currentSlide = 0;

// Función para cambiar de diapositiva
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
  updateSlideIndicators(index);
  currentSlide = index;
}

// Función para actualizar los indicadores de diapositiva
function updateSlideIndicators(index) {
  slideIndicators.innerHTML = '';
  slides.forEach((_, i) => {
    const indicator = document.createElement('div');
    indicator.classList.add('slide-indicator');
    if (i === index) {
      indicator.classList.add('active');
    }
    slideIndicators.appendChild(indicator);
  });
}

// Mostrar la primera diapositiva al cargar la página
showSlide(currentSlide);

// Función para avanzar o retroceder en las diapositivas
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Event listeners para los botones de navegación
document.querySelector('.next-slide').addEventListener('click', nextSlide);
document.querySelector('.prev-slide').addEventListener('click', prevSlide);

// Función para cambiar de diapositiva automáticamente
setInterval(nextSlide, 10000); // Cambiar cada 10 segundos
const logos = document.querySelectorAll('.logo-carousel .logo');
let currentLogo = 0;

// JavaScript para el carrusel de logos
document.addEventListener('DOMContentLoaded', function () {
  const logoCarousel = document.querySelector('.logo-carousel');
  const logoSlides = Array.from(logoCarousel.querySelectorAll('img'));
  let currentLogo = 0;

  function showLogo(index) {
    logoSlides.forEach((logo, i) => {
      logo.style.display = i === index ? 'block' : 'none';
    });
    currentLogo = index;
  }

  function nextLogo() {
    currentLogo = (currentLogo + 1) % logoSlides.length;
    showLogo(currentLogo);
  }

  function startLogoCarousel() {
    setInterval(nextLogo, 5000); // Cambiar cada 5 segundos
  }

  // Mostrar el carrusel de logos al cargar la página
  showLogo(currentLogo);
  startLogoCarousel();
});
