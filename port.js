const theme = document.querySelector(".theme")
const icon = document.querySelector("#theme-icon")

function onClick(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme"))
        {icon.src = "assets/moon.png" }
    else{icon.src = "assets/sun.png"}
}
theme.addEventListener("click", onClick)