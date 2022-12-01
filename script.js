"use strict";

//Light and Dark mode toggle
function darkMode() {
  let body = document.getElementById("body-color");
  body.classList.toggle("dark-mode");
  let h2 = document.getElementById("h2");
  h2.classList.toggle("dark-mode-h2");
  let productName = document.getElementsByClassName(".productListing");
  productName.toggle("dark-mode-btns");

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

function displayCBL(){
let CBLbutton = document.querySelector("#CBL img");
CBLbutton.addEventListener("click", function(){
  document.getElementById("CBL-desc").classList.remove("hidden");
  document.getElementById("CBL-nutrition").classList.remove("hidden");
  document.getElementById("CBL-h3").classList.remove("hidden");
  document.getElementById("CBL-img").classList.remove("hidden");
})



}
function displayPHC(){
  let CBLbutton = document.querySelector("#PHC img");
  CBLbutton.addEventListener("click", function(){
    document.getElementById("PHC-desc").classList.toggle("hidden");
    document.getElementById("PHC-nutrition").classList.toggle("hidden");
    document.getElementById("PHC-h3").classList.toggle("hidden");
    document.getElementById("PHC-img").classList.toggle("hidden");
  })
  }

  function displayTWMF(){
    let CBLbutton = document.querySelector("#TWMF img");
    CBLbutton.addEventListener("click", function(){
      document.getElementById("TWMF-desc").classList.toggle("hidden");
      document.getElementById("TWMF-nutrition").classList.toggle("hidden");
      document.getElementById("TWMF-h3").classList.toggle("hidden");
      document.getElementById("TWMF-img").classList.toggle("hidden");
    })
    }
    function displayHB(){
      let HBbutton = document.querySelector("#HB img");
      HBbutton.addEventListener("click", function(){
        document.getElementById("HB-desc").classList.toggle("hidden");
        document.getElementById("HB-nutrition").classList.toggle("hidden");
        document.getElementById("HB-h3").classList.toggle("hidden");
        document.getElementById("HB-img").classList.toggle("hidden");
      })
      }    
      function displayRCP(){
        let RCPbutton = document.querySelector("#RCP img");
        RCPbutton.addEventListener("click", function(){
          document.getElementById("RCP-desc").classList.toggle("hidden");
          document.getElementById("RCP-nutrition").classList.toggle("hidden");
          document.getElementById("RCP-h3").classList.toggle("hidden");
          document.getElementById("RCP-img").classList.toggle("hidden");
        })
        }
    
function gamePlay() {
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let gameMessage = document.getElementById("winOrLoseMessage");

let die1 = getRandomNumber(1,10);

num1.innerHTML = die1;

let seeMinandMax = function(number)
{
	if(number < 10, number > 1 ){
		return number + " is less than 100";
	}else{
		return number + " is 100 or greater"
	}
}
if(num1.value == num2.value){

  gameMessage.innerHTML = "Yay! Congrats! You've just won a free drink of your choice!";
}else{
  gameMessage.innerHTML = "Aw. Try Again Nexttime.";
}
}
