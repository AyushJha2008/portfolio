const theme = document.querySelector(".theme")
const icon = document.querySelector("#theme-icon")
const menu = document.querySelector(".menu")
const nav = document.querySelector(".nav")

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

menu.addEventListener("click", showMenu)