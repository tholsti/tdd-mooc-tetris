export class Block {
  color;
  x;
  y;
  falling;

  constructor(color) {
    this.color = color;
    this.falling = true;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }
}
