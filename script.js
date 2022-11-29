"use strict";

//I'm going to use a checkbox method to toggle light and dark mode. 
let darkToggle = 
document.querySelector('#darkToggle');

darkToggle.addEventListener('change', ()=>{
document.body.classList.toggle('dark');
})