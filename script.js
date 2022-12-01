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
  document.getElementById("CBL-desc").classList.toggle("hidden");
  document.getElementById("CBL-nutrition").classList.toggle("hidden");
  document.getElementById("CBL-h3").classList.toggle("hidden");
  document.getElementById("CBL-img").classList.toggle("hidden");
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
    

        function checkForm() {
          let name = document.getElementById('fullName');
          let email = document.getElementById('email');
          let phone = document.getElementById("phone")
          let error = document.getElementById('formErrors');
          let isValid = true;
          if (!name.value.length >= 1) {
            isValid = false;
            name.classList.add("error");
            let nameErr = document.createElement("li");
            nameErr.textContent = "Missing full name.";
            error.appendChild(nameErr);
            }
            if (!email.value || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email.value)) {
            isValid = false;
            email.classList.add("error");
            let emailErr = document.createElement("li");
            emailErr.textContent = "Invalid or missing email address.";
            error.appendChild(emailErr);
            }

            if (!phone.value || !/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(phone.value)) {
              isValid = false;
              phone.classList.add("error");
              let phoneErr = document.createElement("li");
              phoneErr.textContent = "Please enter phone number in correct format";
              error.appendChild(phoneErr);
              }

            if (isValid === true) {
              name.classList.remove("error");
             email.classList.remove("error");
             password.classList.remove("error");
             passwordConfirm.classList.remove("error");
              formErrors.classList.add("hide");
              }
              }
              
              document.getElementById("submit").addEventListener("click", function(event) {
              checkForm();
              
              // Prevent default form action. DO NOT REMOVE THIS LINE
              event.preventDefault();
              });
