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
    button.classList.toggle("lightBtn");
    button.classList.remove("darkBtn");
  }else{
    button.innerHTML = "Dark mode";
    button.classList.toggle("darkBtn");
    button.classList.remove("lightBtn")
  }
}


