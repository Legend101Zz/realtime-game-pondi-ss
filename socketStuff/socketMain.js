const io = require("../server").io;

const Orb = require("./classes/Orb");
//make an orbs array that will host all 500 not player orbs
// every time one is absorbed the server will make a new one
const orbs = [];
const settings = {
  defaultNumberOfOrbs: 500, // number of orbs on the map
  defaultSpeed: 6, // player speed
  defaultSize: 6, // default player size
  defaultZoom: 1.5, //as the player gets bigger , zoom needs to go out
  worldWidth: 500,
  worldHeight: 500,
};

initGame();

io.on("connect", (socket) => {
  // a player has connected
  // gives game data to new joining player
  socket.emit("init", {
    // make a playerConfig object - the  data specific to this player that only that player needs to know

    // make a playerData object - the data specific to htis player that everyone needs to know

    // a master player object to house
    orbs,
  });
});

function initGame() {
  for (let i = 0; i < settings.defaultNumberOfOrbs; i++) {
    orbs.push(new Orb(settings));
  }
}
