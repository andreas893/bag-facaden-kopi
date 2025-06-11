"use strict";

const muteButton = document.getElementById('mute-button');
const muteIcon = document.getElementById('mute-icon');

let isMuted = false;

muteButton.addEventListener('click', () => {
  isMuted = !isMuted;

  const mediaElements = document.querySelectorAll('audio, video');
  mediaElements.forEach(el => el.muted = isMuted);

  // Skift billedets src afhængigt af mute-status
  muteIcon.src = isMuted
    ? '../images/mute-ikon.png'    // når muted
    : '../images/unmute-ikon.png'; // når lyd er til
});
