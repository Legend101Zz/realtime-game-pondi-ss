const init = () => {
  //   console.log("init");
  draw();
};

player.locX = Math.floor(500 * Math.random() + 10); //horizontal axis
player.locY = Math.floor(500 * Math.random() + 10); //vertical axis

const draw = () => {
  context.beginPath();
  context.fillStyle = "rgb(255,0,0)";
  context.arc(player.locX, player.locY, 10, 0, 2 * Math.PI); //random X anbd Y are center of the arc
  context.fill();
  context.lineWidth = 3; // giving width to our circle
  context.strokeStyle = "rbg(0,255,0)";
  context.stroke();
  requestAnimationFrame(draw);
};

canvas.addEventListener("mousemove", (event) => {
  // console.log(event)
  const mousePosition = {
    x: event.clientX,
    y: event.clientY,
  };
  const angleDeg =
    (Math.atan2(
      mousePosition.y - canvas.height / 2,
      mousePosition.x - canvas.width / 2
    ) *
      180) /
    Math.PI;
  if (angleDeg >= 0 && angleDeg < 90) {
    xVector = 1 - angleDeg / 90;
    yVector = -(angleDeg / 90);
    console.log("Mouse is in the lower right quardrant");
  } else if (angleDeg >= 90 && angleDeg <= 180) {
    xVector = -(angleDeg - 90) / 90;
    yVector = -(1 - (angleDeg - 90) / 90);
    console.log("Mouse is in the lower left quardrant");
  } else if (angleDeg >= -180 && angleDeg < -90) {
    xVector = (angleDeg + 90) / 90;
    yVector = 1 + (angleDeg + 90) / 90;
    console.log("Mouse is in the top left quardrant");
  } else if (angleDeg < 0 && angleDeg >= -90) {
    xVector = (angleDeg + 90) / 90;
    yVector = 1 - (angleDeg + 90) / 90;
    console.log("Mouse is in the top right quardrant");
  }

  player.xVector = xVector ? xVector : 0.1;
  player.yVector = yVector ? yVector : 0.1;
});
//===========================
//============DRAW-----------
//==============================
