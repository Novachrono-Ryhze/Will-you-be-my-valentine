/*
Copyright © 2026 Srivetrikumaran/NovachronoRyhze
This code and content are licensed under CC BY-NC-ND 4.0 International.
You may view it publicly, but you may NOT use, copy, modify, or redistribute it without explicit permission.
Full license: https://creativecommons.org/licenses/by-nc-nd/4.0/
*/

const heartContainer = document.querySelector(".heart-rain");

function createHeart() {
  if (!heartContainer) return;

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = ["❤️","💖","💕","💗","💘"][Math.floor(Math.random()*5)];

  const size = Math.random() * 22 + 12;
  heart.style.fontSize = `${size}px`;
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.opacity = Math.random();

  const duration = Math.random() * 5 + 6;
  heart.style.animationDuration = `${duration}s`;

  heartContainer.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(createHeart, 150);

//INDEX PAGE LOGIC
const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const subtitle = document.getElementById("subtitle");
const music = document.getElementById("bg-music");
const letterBtn = document.getElementById("letterButton");
const letterOverlay = document.getElementById("letterOverlay");
const closeLetter = document.getElementById("closeLetter");

if (subtitle) {
  const lines = [
    "After all this time, my heart still says yes 💓",
    "Two years, and I’d still pick you ✨",
    "Some things never change… my love for you ❤️"
  ];
  let i = 0;
  setInterval(() => {
    subtitle.textContent = lines[i++ % lines.length];
  }, 3500);
}

if (noBtn) {
  noBtn.addEventListener("mouseenter", () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const rect = noBtn.getBoundingClientRect();
    let x = Math.random() * (vw - rect.width);
    let y = Math.random() * (vh - rect.height);
    noBtn.style.position = "fixed";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });
}

if (yesBtn) {
  yesBtn.addEventListener("mouseenter", () => {
    subtitle.textContent = "Wait… let me show you something 💌";
    music.volume = 0.4;
    music.play().catch(()=>{});

   
    letterBtn.classList.add("show");
  });

  yesBtn.addEventListener("click", () => {
    if (!letterOverlay.classList.contains("hidden")) return;

    document.body.style.transition = "background 0.8s ease";
    document.body.style.background = "#000";
    setTimeout(() => {
      window.location.href = "yes.html";
    }, 600);
  });
}


letterBtn.addEventListener("click", () => {
  letterOverlay.classList.remove("hidden");
});


closeLetter.addEventListener("click", () => {
  letterOverlay.classList.add("hidden");
});

