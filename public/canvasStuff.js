const init = () => {
  //   console.log("init");
  draw();
};

let randomX = Math.floor(500 * Math.random() + 10); //horizontal axis
let randomY = Math.floor(500 * Math.random() + 10); //vertical axis

context.beginPath();
context.fillStyle = "rgb(255,0,0";
context.arc(randomX, randomY, 10, 0, 2 * Math.PI); //random X anbd Y are center of the arc
context.fill();
context.lineWidth = 3; // giving width to our circle
context.strokeStyle = "rbg(0,255,0)";
context.stroke();

console.log(randomX, randomY);

const draw = () => {
  let randomX = Math.floor(500 * Math.random() + 10);
};

//===========================
//============DRAW-----------
//==============================
