"use strict";

// funktion til at animere knappen
function topFunction() {
    const scrollBtn = document.getElementById("myBtn");
    
    scrollBtn.classList.add("clicked");
    setTimeout(() => {
        scrollBtn.classList.remove("clicked");
    }, 400); 
};

// scroll to top beregner
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("myBtn");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos *100) / calcHeight);
    if(pos>100){
        scrollProgress.style.display = "flex";
    }
    else{
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#ead8b1 ${scrollValue}%, #2B5278 ${scrollValue}%)`
};

document.getElementById("myBtn").addEventListener("click", topFunction);

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;