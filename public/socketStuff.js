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
  if (players[player.indexInPlayers].playerData) {
    player.locX = players[player.indexInPlayers].playerData.locX;
    player.locY = players[player.indexInPlayers].playerData.locY;
  }
});

socket.on("orbSwitch", (orbData) => {
  // the server tells us that an orb was absorbed and new added so we update the orbs array of client

  orbs.splice(orbData.captureOrbI, 1, orbData.newOrb);
});

socket.on("playerAbsorbed", (absorbedData) => {
  console.log("Player who was absorbed", absorbedData);
});

socket.on("updateLeaderBoard", (leaderBoardArray) => {
  //console.log("LeaderBoard", leaderBoardArray);
  leaderBoardArray.sort((a, b) => {
    return b.score - a.score;
  });
  document.querySelector(".leader-board").innerHTML = "";
  leaderBoardArray.forEach((p) => {
    document.querySelector(
      ".leader-board"
    ).innerHTML += `<li class="leaderboard-player">${p.name} - ${p.score}</li>`;
  });
});
