// Menu mobile
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("open");
  });
}

// Header com sombra ao rolar
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// FAQ accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Fecha todos
    faqItems.forEach((i) => i.classList.remove("active"));

    // Abre só o clicado
    if (!isActive) {
      item.classList.add("active");
    }
  });
});

// Ano automático no footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (targetId.length > 1) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth",
        });
      }
      // Fecha menu mobile depois do clique
      nav.classList.remove("open");
      menuToggle.classList.remove("active");
    }
    // =============================
//        CARROSSEL
// =============================
let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const dotsContainer = document.getElementById("carouselDots");

// Criar dots
items.forEach((_, i) => {
  const dot = document.createElement("div");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("div");

function showSlide(index) {
  items.forEach((item) => item.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  items[index].classList.add("active");
  dots[index].classList.add("active");
}

function goToSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showSlide(currentIndex);
});

// Auto-play
setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
}, 4500);

  });
});
