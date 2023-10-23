const socket = io.connect("http://localhost:9000");

const init = async () => {
  const initOrbs = await socket.emitWithAck("init", {
    playerName: player.name,
  });
  //our await has been resolved, so let's tock
  setInterval(() => {
    socket.emit("tock", {
      xVector: player.xVector,
      yVector: player.yVector,
    });
  }, 33);
  orbs = initOrbs;
  //called inside of start-game click handler
  console.log(orbs);
  draw(); // in canvasStuff
};

socket.on("tick", (playersArray) => {
  console.log(players);
  players = playersArray;
});
