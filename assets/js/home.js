function drawImage(context, image) {
  const imageTag = new Image(); // <img />
  imageTag.src = image.src; // <img src="./assets/images/car.png" />

  imageTag.onload = function () {
    context.drawImage(imageTag, image.x, image.y);
  };
}

const canvas = document.querySelector("#my-canvas");
if (canvas.getContext) {
  let context = canvas.getContext("2d");

  const car = {
    src: "./assets/images/car.png",
    x: 168,
    y: 430,
  };
  const truck = {
    src: "./assets/images/truck.png",
    x: 240,
    y: 40,
  };
  const stone = {
    src: "./assets/images/stone.png",
    x: 50,
    y: 60,
  };

  drawImage(context, car);
  drawImage(context, truck);
  drawImage(context, stone);
}
