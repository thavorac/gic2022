const canvas = document.querySelector("#my-canvas");
if (canvas.getContext) {
  let context = canvas.getContext("2d");

  let speed = 5;
  const playGround = {
    w: 1020,
    h: 1243,
  };
  let currentY = 0;
  let current1Y = -playGround.h;

  const road = new Image();
  road.src = "./assets/images/road.png";

  function startGame() {
    window.requestAnimationFrame(startGame);

    context.clearRect(0, 0, playGround.w, playGround.h);
    context.drawImage(road, 0, current1Y);
    context.drawImage(road, 0, currentY);
    currentY += speed;
    current1Y += speed;

    if (currentY >= playGround.h) currentY = 0;
    if (current1Y >= 0) current1Y = -playGround.h;
  }

  road.onload = () => {
    startGame();
  };
}
