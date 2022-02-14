let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.getElementById("button");
initialBg();

function initialBg() {
    color1.value = "#" + randomColor();
    color2.value = "#" + randomColor();
    setGradient(); 
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " 
        + color1.value
        + ", "
        + color2.value
        + ")";

        css.textContent = body.style.background + ";";
}

function randomColor() {
    let randomCl = (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    return randomCl;
}

function randomBg() {
    color1.value = "#" + randomColor();
    color2.value = "#" + randomColor();
    setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomBg);