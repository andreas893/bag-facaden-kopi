"use strict";

// Badge-definitioner
const badgeData = {
  forsteskridt: {
    img: "../images/foerste-skridt.png",
    text: "Første skridt - Du tog en chance i noget, der føltes svært.",
  },
  dusagdenoget: {
    img: "../images/sagde-noget.png",
    text: "Du sagde noget - Et svar. En kommentar. Du deltog.",
  },
  dulyttedetildigselv: {
    img: "../images/lyttede-selv.png",
    text: "Du lyttede til dig selv - Du valgte ro frem for pres.",
  },
  tryghedforst: {
    img: "../images/tryghed-foerst.png",
    text: "Tryghed først - Du mærkede dine grænser og respekterede dem.",
  },
  dublevidet: {
    img: "../images/blev-i-det.png",
    text: "Du blev i det - Du trak dig ikke – du stod det igennem, selv med uro.",
  },
  etvalgafgangen: {
    img: "../images/et-valg-af-gangen.png",
    text: "Et valg ad gangen - Du lod ikke én svær situation styre hele dagen",
  },
  uventetmod: {
    img: "../images/uventet-mod.png",
    text: "Uventet mod - Du overraskede dig selv med en handling du ikke havde planlagt.",
  },
  dagenkomoggik: {
    img: "../images/dagen-gik.png",
    text: "Dagen kom og gik - Du kom igennem. Det i sig selv er værd at fejre.",
  },
};

// Elementer
const modal = document.getElementById("popup-modal");
const popupText = document.getElementById("popup-text");
const closeBtn = document.querySelector(".close-btn");
const foldUdButtons = document.querySelectorAll(".fold-ud");

// Luk popup
if (closeBtn && modal) {
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });
}

// Fold-ud knapper
foldUdButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    switch (index) {
      case 0:
        popupText.innerHTML = `
          <h2 style="color: var(--secondary-color); font-family: var(--secondary-font); font-size: 24px;">Refleksion</h2>
          <p style="font-style: italic; margin: 1em 0; font-family: var(--primary-font); font-size: 18px;">
            “Social angst handler ikke om at være genert – men om at frygte andres blik. 
            Man kan føle sig forkert, selv når ingen siger noget. Men du er ikke alene. Og det er muligt at øve sig.”
          </p>
          <ul style="list-style: disc; margin-left: 2em; color: var(--secondary-color); font-family: var(--primary-font); font-size: 16px;">
            <li>Ca. 7% oplever social angst i hverdagen</li>
            <li>Den kan trænes – med små skridt</li>
            <li>At tale med nogen hjælper</li>
          </ul>
          <p style="margin-top: 2em; font-family: var(--primary-font); font-size: 18px;">
            Social angst er mere end blot nervøsitet eller generthed i sociale situationer. 
            Det er en overvældende frygt, der kan lamme dig og forhindre dig i at leve et fuldt og meningsfuldt liv.
          </p>
        `;
        modal.classList.add("show");
        break;      
      case 1:
        visPraesentation();
        break;
      case 2:
        visBadges();
        break;
    }
  });
});

// Badges popup
function visBadges() {
  const badges = JSON.parse(localStorage.getItem("badges")) || [];
  if (badges.length === 0) {
    popupText.innerHTML = `<h2>Dine badges</h2><p>Du har endnu ikke opnået nogle badges.</p>`;
  } else {
    let badgeHTML = `<h2>Dine badges</h2><div class="badge-container">`;
    badges.forEach((badgeKey) => {
      const badge = badgeData[badgeKey];
      if (badge) {
        badgeHTML += `
          <div class="badge">
            <img src="${badge.img}" alt="Badge billede">
            <p>${badge.text}</p>
          </div>
        `;
      }
    });
    badgeHTML += `</div>`;
    popupText.innerHTML = badgeHTML;
  }
  modal.classList.add("show");
}

// Præsentation popup
function visPraesentation() {
  const data = JSON.parse(localStorage.getItem("valgStatus")) || {
    trakSigTilbage: 0,
    provedeNogetNyt: 0
  };

  const staerkeOejeblikke = findStaerkesteOejeblikke();
  const staerkeHTML = staerkeOejeblikke.length > 0
    ? `<p><strong>Dine stærkeste øjeblikke:</strong><br>${staerkeOejeblikke.join("<br>")}</p>`
    : `<p><strong>Dine stærkeste øjeblikke:</strong><br>Ingen registreret endnu.</p>`;

  const indhold = `
    <h2>Præsentation</h2>
    <p><strong>Valg du tog i dag:</strong><br>
      ${data.trakSigTilbage} gange trak du dig tilbage.<br>
      ${data.provedeNogetNyt} gange prøvede du noget nyt.
    </p>
    ${staerkeHTML}
  `;

  popupText.innerHTML = indhold;
  modal.classList.add("show");
}











// Badge-funktion + tæller valg
function tildelBadge(badgeKey) {
  const eksisterende = JSON.parse(localStorage.getItem("badges")) || [];
  if (!eksisterende.includes(badgeKey)) {
    eksisterende.push(badgeKey);
    localStorage.setItem("badges", JSON.stringify(eksisterende));
  }

  let valgStatus = JSON.parse(localStorage.getItem("valgStatus")) || {
    trakSigTilbage: 0,
    provedeNogetNyt: 0
  };

  if (badgeKey === "dulyttedetildigselv" || badgeKey === "tryghedforst") {
    valgStatus.trakSigTilbage++;
  } else if (
    badgeKey === "dusagdenoget" ||
    badgeKey === "forsteskridt" ||
    badgeKey === "uventetmod" ||
    badgeKey === "etvalgafgangen" ||
    badgeKey === "dublevidet"
  ) {
    valgStatus.provedeNogetNyt++;
  }

  localStorage.setItem("valgStatus", JSON.stringify(valgStatus));
}

// Find stærkeste øjeblikke
function findStaerkesteOejeblikke() {
  const badges = JSON.parse(localStorage.getItem("badges")) || [];
  const staerkeOejeblikkeTekster = badges
    .map(badgeKey => badgeData[badgeKey]?.text)
    .filter(Boolean);

  for (let i = staerkeOejeblikkeTekster.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [staerkeOejeblikkeTekster[i], staerkeOejeblikkeTekster[j]] = [staerkeOejeblikkeTekster[j], staerkeOejeblikkeTekster[i]];
  }

  return staerkeOejeblikkeTekster.slice(0, 2);
}

// Genstart historien
function genstartHistorien() {
  localStorage.removeItem("badges");
  localStorage.removeItem("valgStatus");
}
