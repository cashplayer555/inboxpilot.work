const button = document.getElementById("copiumBtn");
const message = document.getElementById("message");

const updates = [
  "Investor update: we are exploring new opportunities.",
  "Translation: the domain renewal failed.",
  "Jacob said 'trust the process' right before disappearing.",
  "Current valuation: one Monster Energy can.",
  "We almost had a logo.",
  "The business model was mostly vibes.",
  "Our biggest competitor was basic math.",
  "We held one meeting. It was at Taco Bell."
];

button.addEventListener("click", () => {
  const random = updates[Math.floor(Math.random() * updates.length)];
  message.textContent = random;
});
