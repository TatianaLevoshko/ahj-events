import Game from "./game";

export default class Start {
  static init() {
    this.game = new Game("#game-board");
    this.game.startGame();
  }
}
