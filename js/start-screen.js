"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');

    // When the start screen is clicked
    startScreen.addEventListener('click', () => {
        // Fade out the start screen
        startScreen.classList.add('fade-out');

        // Wait for fade-out transition (1s), then animate the eyes
        setTimeout(() => {
            document.body.classList.add('animate-eyes');
        }, 1000);
    });
});
