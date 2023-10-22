const io = require("../server").io;

const Orb = require("./classes/Orb");
//make an orbs array that will host all 500 not player orbs
// every time one is absorbed the server will make a new one
const orbs = [];

initGame();

function initGame() {
  for (let i = 0; i < 500; i++) {
    orbs.push(new Orb());
  }
}

console.log(orbs);
