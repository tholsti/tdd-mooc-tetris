export class RotatingShape {
  shape;
  constructor(shape) {
    this.shape = shape.split("\n").map((line) => line.trim());
  }

  rotateRight() {
    let newShape = "";

    for (let y = 0; y < this.shape.length; y++) {
      for (let x = this.shape.length - 1; x >= 0; x--) {
        const element = this.shape[x][y];
        newShape += element;
      }
      if (y !== this.shape.length - 1) newShape += "\n";
    }
    return new RotatingShape(newShape);
  }

  rotateLeft() {
    let newShape = "";

    for (let y = this.shape.length - 1; y >= 0; y--) {
      for (let x = 0; x < this.shape.length; x++) {
        const element = this.shape[x][y];
        newShape += element;
      }
      if (y !== 0) newShape += "\n";
    }

    return new RotatingShape(newShape);
  }

  toString() {
    return this.shape.join("\n").concat("\n");
  }
}
