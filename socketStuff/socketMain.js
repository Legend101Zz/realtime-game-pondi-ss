const io = require("../server").io;

//============CLASSES=========
const Player = require("./classes/Player");
const PlayerConfig = require("./classes/PlayerConfig");
const PlayerData = require("./classes/PlayerData");
const Orb = require("./classes/Orb");
//===========================

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
  const playerName = "Mrigesh";
  // make a playerConfig object - the  data specific to this player that only that player needs to know
  const playerConfig = new PlayerConfig(settings);
  // make a playerData object - the data specific to htis player that everyone needs to know
  const playerData = new PlayerData(playerName, settings);

  // a master player object to house

  const player = new Player(socket.id, playerConfig, playerData);
  socket.emit("init", {
    orbs,
  });
});

function initGame() {
  for (let i = 0; i < settings.defaultNumberOfOrbs; i++) {
    orbs.push(new Orb(settings));
  }
}
