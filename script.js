"use strict";

//Light and Dark mode toggle
function darkMode() {
  let body = document.getElementById("body-color");
  body.classList.toggle("dark-mode");
  let h2 = document.getElementById("h2");
  h2.classList.toggle("dark-mode-h2");

  let button = document.getElementById("toggleButton");
  if (button.innerHTML === "Dark mode"){
    button.innerHTML = "Light mode";
    button.style.removeProperty("background-color");
    button.style.setProperty("background-color", "var(--yellow)")
    button.style.setProperty("color", "black");
  }else{
    button.innerHTML = "Dark mode";
    button.style.setProperty("background-color", "var(--blue)");
    button.style.setProperty("color", "white");

  }
}

//let productFigImg = document.querySelector("figure img");
//let displayH3 = document.querySelectorAll("#product-h3 h3");
//let displayNutrition = document.querySelectorAll("#product-nutrition p");
//let displayDescription = document.querySelectorAll("grid-child-element-paragraph p");
//let displayImage = document.querySelectorAll("grid-child-element-image img");


//By default, CBL is shown. On click on the thumbnail, CBL content should display. 

function displayProduct(){
let CBLbutton = document.querySelector("#CBL-p1 img");
CBLbutton.addEventListener("click", function(){
  document.getElementById("CBL-desc").classList.remove("hidden");
  document.getElementById("CBL-h3").classList.remove("hidden");
  document.getElementById("CBL-img").classList.remove("hidden");
})
}