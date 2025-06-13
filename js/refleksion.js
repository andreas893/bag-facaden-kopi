"use strict";

function toggleReflection() {
    const section = document.getElementById('refleksion-section');
    section.classList.toggle('show');
}

function closeReflection() {
    const section = document.getElementById('refleksion-section');
    section.classList.remove('show');
}

function reflektInput() {
    const input = document.getElementById('customInput').value.trim();
    const response = document.getElementById('responseMessage');

    if (input) {
        response.textContent = "Tak for dit svar. Det er stærkt, at du reflekterer over dine egne valg.";
    } else {
        response.textContent = "";
    }
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
