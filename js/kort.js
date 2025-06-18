"use strict";
document.querySelectorAll('.cards img').forEach(card => {
  card.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    const textContainer = document.getElementById('card-text');
    const titleContainer = document.getElementById('card-title');
    const popupCard = document.querySelector('.card-popup');
    const textLines = card.getAttribute('data-text').split('|');
    const titleText = card.getAttribute('data-title');


    titleContainer.textContent = titleText;

    while (textContainer.children.length > 2) {
        textContainer.removeChild(textContainer.lastChild);
    }

    // Add each line as a paragraph
    textLines.forEach(line => {
      const p = document.createElement('p');
      p.textContent = line;
      textContainer.appendChild(p);
    });

    overlay.style.display = 'flex';
    
  });
});
  
  document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'none';
  });

  document.getElementById('overlay').addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      event.currentTarget.style.display = 'none';
    }
  });