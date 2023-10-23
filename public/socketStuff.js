const socket = io.connect("http://localhost:9000");

const init = async () => {
  const initOrbs = await socket.emitWithAck("init", {
    playerName: player.name,
  });
  orbs = initOrbs;
  //called inside of start-game click handler
  console.log(orbs);
  draw(); // in canvasStuff
};

socket.on("tick", (players) => {
  console.log(players);
});
