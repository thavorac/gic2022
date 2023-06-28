const defaultSpeed = 5;
const playGround = {
  w: 1020,
  h: 1243,
};

class Player {
  constructor(name, car) {
    this.name = name;
    this.car = car;
    this.score = 0;
    this.level = 2;
    this.x = 500;
    this.y = 1000;
  }
}
class Obstacle {
  constructor(name, obstacle) {
    this.name = name;
    this.obstacle = obstacle;
    this.x = Math.floor(Math.random() * playGround.w) + 1;
    this.y = 0;
  }
}

const canvas = document.querySelector("#my-canvas");
if (canvas.getContext) {
  let context = canvas.getContext("2d");

  // Variables
  let currentY = 0;
  let current1Y = -playGround.h;

  const road = new Image();
  road.src = "./assets/images/road.png";
  const car = new Image();
  car.src = "./assets/images/red-car.png";

  const player1 = new Player("Sok", car);
  const obstacles = new Array();
  let speed = player1.level * defaultSpeed;

  for (let i = 0; i < 10; i++) {
    obstacles.push(new Obstacle("Obstacle" + i, "test"));
  }

  console.log(obstacles);

  // Add event listener to the game
  document.addEventListener("keydown", function (e) {
    // keydown (arrow left/right)
    if (e.keyCode == 39) {
      player1.x = player1.x + speed;
      player1.x = player1.x > playGround.w ? playGround.w : player1.x;
    }
    if (e.keyCode == 37) {
      player1.x = player1.x - speed;
      player1.x = player1.x < 0 ? 0 : player1.x;
    }
  });
  document.addEventListener("mousedown", function (e) {
    let rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    console.log(x, y);
  });
  // Functions
  function startGame() {
    window.requestAnimationFrame(startGame);

    context.clearRect(0, 0, playGround.w, playGround.h);
    context.drawImage(road, 0, current1Y);
    context.drawImage(road, 0, currentY);
    currentY += speed;
    current1Y += speed;

    if (currentY >= playGround.h) currentY = 0;
    if (current1Y >= 0) current1Y = -playGround.h;

    context.drawImage(player1.car, player1.x, player1.y);
  }

  // Promises
  const loadRoadPromise = new Promise((resolve) => {
    road.onload = () => resolve();
  });
  const loadCarPromise = new Promise((resolve) => {
    car.onload = () => resolve();
  });

  Promise.all([loadRoadPromise, loadCarPromise]).then(() => {
    startGame();
  });
}
