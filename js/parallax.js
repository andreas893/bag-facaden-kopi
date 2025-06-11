"use strict";

const brainImg = document.querySelector('.kort-head img');


window.addEventListener("scroll", () => {

  const value = window.scrollY;


   let newRight = -1000 + value * 0.45;

 
   newRight = Math.min(newRight, -125);
 
 
   brainImg.style.right = `${newRight}px`;
 
  
   const scaleValue = Math.min(1, 0.5 + value * 0.002);
   brainImg.style.transform = `scale(${scaleValue})`;
   brainImg.style.opacity = scaleValue;
 });