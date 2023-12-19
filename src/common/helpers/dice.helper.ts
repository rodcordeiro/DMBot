export class Dice {
  static d4() {
    return Math.floor(Math.random() * 4 + 1);
  }
  static d6() {
    return Math.floor(Math.random() * 6 + 1);
  }
  static d20() {
    return Math.floor(Math.random() * 20 + 1);
  }
  static d100() {
    return Math.floor(Math.random() * 100 + 1);
  }
}
