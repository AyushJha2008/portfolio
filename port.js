
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


  vantaEffect = VANTA.NET({
    el: ".container",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 800.00,
    scale: 1.00,
    scaleMobile: 1,
    backgroundColor: isDarkTheme ? 0x000000 : 0xfaebd7, // black / antiquewhite
    color: isDarkTheme ? 0x4600d3 : 0xFFA500, // darkblue / red,

    //qui
    // backgroundColor: isDarkTheme ? 0x000000 : 0xfaebd7, // black / antiquewhite
    // color: isDarkTheme ? 0x4600d3 : 0xff0000, // darkblue / red
    points: 17.00,
    opacity: 0,
    spacing: 16.00
  });


  vantaEffect = VANTA.NET({
    el: ".project-cont",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 20.00,
    minWidth: 800.00,
    scale: 1.00,
    scaleMobile: 1,
    backgroundColor: isDarkTheme ? 0x000000 : 0xfaebd7, // black / antiquewhite
    color: isDarkTheme ? 0x4600d3 : 0xff0000, // darkblue / red,

    //qui
    // backgroundColor: isDarkTheme ? 0x000000 : 0xfaebd7, // black / antiquewhite
    // color: isDarkTheme ? 0x4600d3 : 0xff0000, // darkblue / red
    points: 17.00,
    opacity: 0,
    spacing: 16.00
  });

  vantaEffect = VANTA.NET({
    el: ".event-cont",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.00,
    minWidth: 800.00,
    scale: 1.00,
    scaleMobile: 1,
    backgroundColor: isDarkTheme ? 0x000000 : 0xfaebd7, // black / antiquewhite
    color: isDarkTheme ? 0x4600d3 : 0xFFA500, // darkblue / red,
    points: 17.00,
    opacity: 0,
    spacing: 16.00
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
