const name = localStorage.getItem("valName") || "You";
document.getElementById("greet").innerText = "Hey " + name + " 🐼💗";

  const questions = [
  "No",
  "Are you sure? 🥺",
  "Are you sure? 🥺",
  "Think again 💭",
  "Panda is getting sad 🐼",
  "Last chance 😭",
  "Please say YES 💔",
  "Think about it again! 🧐",
  "Panda is getting sad... 🐼",
  "Really? Last chance!",
  "Surely you meant Yes? 🤨",
  "You're breaking my heart! 💔",
  "I'm gonna cry... 😭",
  "Please please please!",
  "What if I give you chocolate? 🍫",
  "Okay, now you're just being mean!",
  "I'll wait here all day. 😤",
  "You can't say No forever!",
  "Click the Green one! 👈",
  "Error: 'No' button broken. Try Yes."
];

const sadPandas = [
  "https://media.tenor.com/v82ifjvW8XIAAAAM/aham-sithi-peace-goma-sithi.gif",
  "https://i.pinimg.com/originals/05/0c/5a/050c5a03f7415fb92f082371d3e8cb2a.gif",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmwGL4NGHdfrbaGjYEtD15uWz0BVuHJrJBAw&s"
];

const happyPandas = [
  "https://i.pinimg.com/originals/c9/90/78/c990783caafed97b2edd60eaed7c244e.gif",
  "https://media.tenor.com/0JWcKoeZ3kkAAAAj/bubu-bubu-dudu.gif",
  "https://media.tenor.com/E2_i2XDqoG4AAAAM/shakespaw.gif"
];

let count = 0;

function sayNo() {
  const q = questions[count % questions.length];
  document.getElementById("question").innerText = q;

  const panda = sadPandas[Math.floor(Math.random() * sadPandas.length)];
  document.getElementById("panda").src = panda;

  const noBtn = document.getElementById("noBtn");
  noBtn.style.top = Math.random() * 150 + "px";
  noBtn.style.left = Math.random() * 250 + "px";

  count++;
}

function sayYes() {
  document.getElementById("question").innerText =
    "Yaaayyy!!! 💖 " + name + " said YES!!! 🥰";

  document.getElementById("panda").src =
    happyPandas[Math.floor(Math.random() * happyPandas.length)];

  document.getElementById("mainBody").className = "happy-bg";

  document.getElementById("noBtn").style.display = "none";

  const music = document.getElementById("bgMusic");
  music.play();
}
