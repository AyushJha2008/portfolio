const theme = document.querySelector(".theme")
const icon = document.querySelector("#theme-icon")
const menu = document.querySelector(".menu")
const nav = document.querySelector(".nav")
const typingElement = document.getElementById("typing");
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = "";

function onClick(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme"))
        {icon.src = "assets/moon.png" }
    else{icon.src = "assets/sun.png"}
}
theme.addEventListener("click", onClick)

function showMenu(){
    nav.style.display = nav.style.display === "flex"? "none": "flex"
}

const roles = [
      "C.E. undergraduate",
      "Freelancer and Intern",
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
        // Pause before deleting
        isDeleting = true;
        setTimeout(typeEffect, 1200);
        return;
      }

      if (isDeleting && charIndex === 0) {
        // Next word
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      const delay = isDeleting ? 40 : 80;
      setTimeout(typeEffect, delay);
    }

    typeEffect();

menu.addEventListener("click", showMenu)