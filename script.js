const memes = [
  {
    text: "We raised $0 but gained exposure 🔥",
    img: "https://i.imgflip.com/1ur9b0.jpg"
  },
  {
    text: "Investor: 'So what do you do?' — Me: 'Yes.'",
    img: "https://i.imgflip.com/26am.jpg"
  },
  {
    text: "Pivoting for the 47th time like:",
    img: "https://i.imgflip.com/2/1ihzfe.jpg"
  },
  {
    text: "Our MVP is just a Google Doc",
    img: "https://i.imgflip.com/30b1gx.jpg"
  }
];

const roasts = [
  "We passed on this deal. Respectfully, no.",
  "Have you considered shutting it down gracefully?",
  "This is not a startup. This is a group project.",
  "Come back when you have revenue (lol).",
  "Interesting idea. Unfortunately, no."
];

function generateMeme() {
  const m = memes[Math.floor(Math.random() * memes.length)];

  document.getElementById("memeText").innerText = m.text;

  const img = document.getElementById("memeImg");
  img.src = m.img;
  img.style.display = "block";
}

function roastMe() {
  const r = roasts[Math.floor(Math.random() * roasts.length)];
  document.getElementById("roast").innerText = r;
}
