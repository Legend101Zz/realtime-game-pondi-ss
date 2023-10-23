const io = require("../server").io;
const checkForOrbCollisions =
  require("./checkCollisions").checkForOrbCollisions;
checkForPlayerCollisions =
  require("./checkCollisions").checkForPlayerCollisions;

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
let tictokVar;
const players = [];
const playersForUsers = [];

initGame();

io.on("connect", (socket) => {
  // a player has connected
  let player = {};
  socket.on("init", (playerObj, callBack) => {
    if (players.length === 0) {
      //Issue an event to every connected socket , that is playing the game , 30 timees per second
      tictokVar = setInterval(() => {
        io.to("game").emit("tick", playersForUsers); // send the event to the 'game' room
      }, 33);
    }

    socket.join("game");
    // gives game data to new joining player
    const playerName = playerObj.playerName;
    // make a playerConfig object - the  data specific to this player that only that player needs to know
    const playerConfig = new PlayerConfig(settings);
    // make a playerData object - the data specific to htis player that everyone needs to know
    const playerData = new PlayerData(playerName, settings);

    // a master player object to house
    player = new Player(socket.id, playerConfig, playerData);
    players.push(player);
    playersForUsers.push({ playerData });
    // sends back orbs as acknowledge ment
    callBack({ orbs, indexInPlayers: playersForUsers.length - 1 });
  });
  // The client sent over a tock
  socket.on("tock", (data) => {
    //a tock has come in before a player s setup because of socket.io keeping the state and trying to reconnect after disconnection
    if (!player.playerConfig) {
      return;
    }
    speed = player.playerConfig.speed;
    const xV = (player.playerConfig.xVector = data.xVector);
    const yV = (player.playerConfig.yVector = data.yVector);

    if (
      (player.playerData.locX < 5 && xV < 0) ||
      (player.playerData.locX > 500 && xV > 0)
    ) {
      player.playerData.locY -= speed * yV;
    } else if (
      (player.playerData.locY < 5 && yV > 0) ||
      (player.playerData.locY > 500 && yV < 0)
    ) {
      player.playerData.locX += speed * xV;
    } else {
      player.playerData.locX += speed * xV;
      player.playerData.locY -= speed * yV;
    }
  });

  socket.on("disconnect", () => {
    //check to se if players is empty, then stop ticking
    if (players.length === 0) {
      clearInterval(tictokVar);
    }
  });
});

function initGame() {
  for (let i = 0; i < settings.defaultNumberOfOrbs; i++) {
    orbs.push(new Orb(settings));
  }
}
