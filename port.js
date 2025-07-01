
const theme = document.querySelector(".theme");
const icon = document.querySelector("#theme-icon");
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const typingElement = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let currentText = "";

// Typing effect
const roles = [
  "C.E. undergraduate",
  "Freelancer & Intern",
  "FullStack Web Developer"
];

function typeEffect() {
  const fullText = roles[roleIndex];

  if (isDeleting) {
    charIndex--;
    currentText = fullText.substring(0, charIndex);
  } else {
    charIndex++;
    currentText = fullText.substring(0, charIndex);
  }

  typingElement.textContent = currentText;

  if (!isDeleting && charIndex === fullText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  const delay = isDeleting ? 40 : 80;
  setTimeout(typeEffect, delay);
}

typeEffect();

// Menu toggle
menu.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});


let vantaEffect;

function loadVanta() {
  if (vantaEffect) vantaEffect.destroy();

  const isDarkTheme = document.body.classList.contains("dark-theme");


  vantaEffect = VANTA.WAVES({
    el: ".container",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 800.00,
    scale: 1.00,
    scaleMobile: 1,
    color: isDarkTheme ? 0x020320 :  0xC28B30, // darkblue / red,
  });
  
}

loadVanta(); 


function onClick() {
  document.body.classList.toggle("dark-theme");
  icon.src = document.body.classList.contains("dark-theme")
    ? "assets/moon.png"
    : "assets/sun.png";
  loadVanta(); // Reload Vanta with new theme colors
}

theme.addEventListener("click", onClick);

//load lazy
const boxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      // If you don't want to animate again, unobserve after showing
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15  // Trigger when 10% is visible
});

boxes.forEach(box => observer.observe(box));