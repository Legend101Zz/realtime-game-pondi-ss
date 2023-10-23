const socket = io.connect("http://localhost:9000");

const init = async () => {
  const initData = await socket.emitWithAck("init", {
    playerName: player.name,
  });
  //our await has been resolved, so let's tock
  setInterval(() => {
    socket.emit("tock", {
      xVector: player.xVector ? player.xVector : 0.1,
      yVector: player.yVector ? player.yVector : 0.1,
    });
  }, 33);
  console.log(initData);
  orbs = initData.orbs;
  player.indexInPlayers = initData.indexInPlayers;
  //called inside of start-game click handler
  console.log(orbs);
  draw(); // in canvasStuff
};

//the server sends out the location of all players 30fps
socket.on("tick", (playersArray) => {
  console.log(players);
  players = playersArray;
  player.locX = players[player.indexInPlayers].playerData.locX;
  player.locY = players[player.indexInPlayers].playerData.locY;
});
