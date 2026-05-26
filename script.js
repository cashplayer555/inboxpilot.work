const game = document.getElementById("game");
const player = document.getElementById("player");
const scoreEl = document.getElementById("score");
const finalScoreEl = document.getElementById("finalScore");
const gameOverScreen = document.getElementById("gameOver");
const restartBtn = document.getElementById("restartBtn");
const playAgainBtn = document.getElementById("playAgain");

let playerX = 425;
let score = 0;
let gameRunning = true;
let enemies = [];

const keys = {
  ArrowLeft: false,
  ArrowRight: false,
  a: false,
  d: false,
};

document.addEventListener("keydown", (e) => {
  if (keys.hasOwnProperty(e.key)) {
    keys[e.key] = true;
  }
});

document.addEventListener("keyup", (e) => {
  if (keys.hasOwnProperty(e.key)) {
    keys[e.key] = false;
  }
});

function movePlayer() {
  if ((keys.ArrowLeft || keys.a) && playerX > 0) {
    playerX -= 7;
  }

  if ((keys.ArrowRight || keys.d) && playerX < 850) {
    playerX += 7;
  }

  player.style.left = playerX + "px";
}

function createEnemy() {
  const enemy = document.createElement("div");
  enemy.classList.add("enemy");

  const x = Math.random() * 855;
  enemy.style.left = x + "px";
  enemy.style.top = "-50px";

  game.appendChild(enemy);

  enemies.push({
    el: enemy,
    x: x,
    y: -50,
    speed: 3 + Math.random() * 4
  });
}

function updateEnemies() {
  enemies.forEach((enemy, index) => {
    enemy.y += enemy.speed;
    enemy.el.style.top = enemy.y + "px";

    // collision
    if (
      enemy.y + 45 > 480 &&
      enemy.x < playerX + 50 &&
      enemy.x + 45 > playerX
    ) {
      endGame();
    }

    // remove enemy
    if (enemy.y > 600) {
      enemy.el.remove();
      enemies.splice(index, 1);

      score++;
      scoreEl.textContent = score;
    }
  });
}

function createStars() {
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    star.style.left = Math.random() * 900 + "px";
    star.style.top = Math.random() * 550 + "px";

    game.appendChild(star);
  }
}

function gameLoop() {
  if (!gameRunning) return;

  movePlayer();
  updateEnemies();

  requestAnimationFrame(gameLoop);
}

function enemySpawner() {
  if (!gameRunning) return;

  createEnemy();

  const speed = Math.max(300, 1000 - score * 20);

  setTimeout(enemySpawner, speed);
}

function endGame() {
  gameRunning = false;
  finalScoreEl.textContent = score;
  gameOverScreen.style.display = "flex";
}

function restartGame() {
  enemies.forEach(enemy => enemy.el.remove());
  enemies = [];

  score = 0;
  scoreEl.textContent = "0";

  playerX = 425;
  player.style.left = playerX + "px";

  gameRunning = true;
  gameOverScreen.style.display = "none";

  gameLoop();
  enemySpawner();
}

restartBtn.addEventListener("click", restartGame);
playAgainBtn.addEventListener("click", restartGame);

createStars();
gameLoop();
enemySpawner();
