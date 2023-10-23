// data that other players need to know

class PlayerData {
  constructor(playerName, settings) {
    this.name = playerName;
    this.locX = Math.floor(500 * Math.random() + 10); // horizontal axis
    this.locY = Math.floor(500 * Math.random() + 10); // vertical axis
  }
}
