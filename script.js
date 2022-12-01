"use strict";

//Light and Dark mode toggle
function darkMode() {
  let body = document.getElementById("background-color");
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


