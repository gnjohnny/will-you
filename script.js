const BUTTONTEXTARR = [
  "Ghai 😥...",
  "Pleasee 🙏...",
  "Kubali tuh 😓...",
  "Nitainama woiyee 😔...",
];

const STICKER_LINKS = [
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWpiMDh3d3U3c256ajd4ZTNxN3J1bjBucmM2dnU0aDd2cTVzcGtoZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qQdL532ZANbjy/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWpiMDh3d3U3c256ajd4ZTNxN3J1bjBucmM2dnU0aDd2cTVzcGtoZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fFa05KbZowXiEIyRse/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWpiMDh3d3U3c256ajd4ZTNxN3J1bjBucmM2dnU0aDd2cTVzcGtoZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/q2qxiBO5prG9i/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWpiMDh3d3U3c256ajd4ZTNxN3J1bjBucmM2dnU0aDd2cTVzcGtoZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OzlmyoTC2n3aOTXGFi/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YnF1czk3NDdteDc5cnN2ZjhyczhzNTJ0ZXZnZmMxZzRzcG4zb2FyaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TU76e2JHkPchG/giphy.gif",
];

let numOfClicks = 0;
let noBtn = document.getElementById("no_btn");
let yesBtn = document.getElementById("yes_btn");
let stickerImg = document.getElementById("sticker_img");
let question = document.getElementById("question");
let message = document.getElementById("message");
let controls = document.getElementById("controls");

var noBtnClicked = () => {
  numOfClicks++;
  const randNum = Math.floor(Math.random() * 4);
  noBtn.textContent = BUTTONTEXTARR[randNum];

  stickerImg.src = STICKER_LINKS[randNum];

  if (numOfClicks >= 5) {
    noBtn.textContent = "Catch me 😂...";

    noBtn.style.position = "absolute";

    noBtn.style.transition = "top 0.3s ease, left 0.3s ease";
    noBtn.style.top = "50%";
    noBtn.style.left = "50%";

    const changePosition = () => {
      const randTop = Math.floor(Math.random() * 80);
      const randLeft = Math.floor(Math.random() * 80);
      noBtn.style.top = randTop + "%";
      noBtn.style.left = randLeft + "%";
      stickerImg.src =
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG4zMWg5aHpoM3V6dDk4bmtwZDlwMnhrdHF0cGg2d2xwemU2ejFtcyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/s3KoA4wpxzWltloeXo/giphy.gif";
    };

    noBtn.removeEventListener("click", noBtnClicked);
    noBtn.addEventListener("mouseover", changePosition);
    noBtn.addEventListener("touchstart", changePosition);
  }
};

noBtn.addEventListener("click", noBtnClicked);

var yesBtnClicked = () => {
  question.textContent = "I knew you would say yes 😍...";
  stickerImg.src =
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZzNkeW13aGNsemo2dWIxYzRrOTd2OHo1YmdiZGVrYWk0ejJqeGdrbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3osxYdXvsGw6wT5lIY/giphy.gif";
  controls.style.display = "none";
  message.textContent = "I love you ❤️...Number ni ile ile 😋😘!!!";

  //animation effects
  for (let i = 0; i < 200; i++) {
    setTimeout(() => {
      const randTop = Math.floor(Math.random() * 100);
      const randLeft = Math.floor(Math.random() * 100);
      const heart = document.createElement("span");
      heart.textContent = "❤️";
      heart.classList.add("heart");
      heart.style.top = randTop + "%";
      heart.style.left = randLeft + "%";
      document.body.appendChild(heart);
      setTimeout(() => {
        heart.remove();
      }, 2000);
    }, i * 100);
  }
};

yesBtn.addEventListener("click", yesBtnClicked);
