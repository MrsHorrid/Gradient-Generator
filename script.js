var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
// we tell js to select the inputs we setup on the html

function setGradient() { // refer to css 
    body.style.background = 
    "linear-gradient(to right, "  
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";"; //adds text description
}

color1.addEventListener("input", setGradient); // dont need to call a function thats been pre determined
// event listener does it for you so just write the function name
color2.addEventListener("input", setGradient);




