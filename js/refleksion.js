"use strict";

function toggleReflection() {
    const section = document.getElementById('refleksion-section');
    const overlay = document.getElementById('overlay')
    section.classList.toggle('show');
    if (section.classList.contains('show')) {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
}

function closeReflection() {
    const section = document.getElementById('refleksion-section');
    const overlay = document.getElementById('overlay')
    section.classList.remove('show');
    overlay.style.display = 'none';
}

function reflektInput() {
    const inputField = document.getElementById('customInput');
    const input = inputField.value.trim();
    const response = document.getElementById('responseMessage');

    if (input) {
        response.textContent = "Tak for dit svar. Det er stærkt, at du reflekterer over dine egne valg.";
    } else {
        response.textContent = "";
    }
    inputField.value = "";
}

document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector(".refleksion-toggle");
    const closeBtn = document.querySelector("#refleksion-section .close-btn");
    const sendBtn = document.querySelector("#refleksion-section button:nth-of-type(2)");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", toggleReflection);
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closeReflection);
    }

    if (sendBtn) {
        sendBtn.addEventListener("click", reflektInput);
    }
});

