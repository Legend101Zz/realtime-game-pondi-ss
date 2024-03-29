// player.locX = Math.floor(500 * Math.random() + 10); //horizontal axis
// player.locY = Math.floor(500 * Math.random() + 10); //vertical axis

const draw = () => {
  // console.log("started");

  //reset the context translate back to default
  context.setTransform(1, 0, 0, 1, 0, 0);

  //clears canvas each frame
  context.clearRect(0, 0, canvas.width, canvas.height);

  //clamp the screen to players location
  const camX = -player.locX + canvas.width / 2;
  const camY = -player.locY + canvas.height / 2;
  context.translate(camX, camY);

  //============DRAW-ALL-PLAYERS=========
  players.forEach((p) => {
    if (!p.playerData) {
      //if the playerData doesn't exist, this is an absobred player and we don't draw
      return;
    }
    context.beginPath();
    context.fillStyle = p.playerData.color;
    context.arc(
      p.playerData.locX,
      p.playerData.locY,
      p.playerData.radius,
      0,
      2 * Math.PI
    ); //random X anbd Y are center of the arc
    // context.arc(200, 200, 10, 0, 2 * Math.PI);
    context.fill();
    context.lineWidth = 3; // giving width to our circle
    context.strokeStyle = "rgb(0,255,0)";
    context.stroke(); //draw the border
  });

  //====================================

  //============DRAW-ALL-THE-ORBS======
  orbs.forEach((orby) => {
    //console.log(orby);
    context.beginPath();
    context.fillStyle = orby.color;
    context.arc(orby.locX, orby.locY, orby.radius, 0, Math.PI * 2);
    context.fill();
  });
  //=================================

  requestAnimationFrame(draw);
};
canvas.addEventListener("mousemove", (event) => {
  //console.log(event);
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
  } else if (angleDeg >= 90 && angleDeg <= 180) {
    xVector = -(angleDeg - 90) / 90;
    yVector = -(1 - (angleDeg - 90) / 90);
  } else if (angleDeg >= -180 && angleDeg < -90) {
    xVector = (angleDeg + 90) / 90;
    yVector = 1 + (angleDeg + 90) / 90;
  } else if (angleDeg < 0 && angleDeg >= -90) {
    xVector = (angleDeg + 90) / 90;
    yVector = 1 - (angleDeg + 90) / 90;
  }

  player.xVector = xVector;
  player.yVector = yVector;
});
//===========================
//============DRAW-----------
//==============================
