export class RotatingShape {
  nrOfOrientations;
  orientations;
  orientation;

  constructor(shape, nrOfOrientations = 4, orientation = 0, orientations) {
    this.nrOfOrientations = nrOfOrientations;
    this.orientation = orientation;
    this.orientations =
      orientations ||
      this.drawOrientations(this.parseShape(shape), nrOfOrientations);
  }

  parseShape(shape) {
    return shape
      .split("\n")
      .map((line) => line.trim())
      .join("\n")
      .concat("\n");
  }

  rotateShape(shape) {
    const arr = this.shapeToArray(shape);
    let newShape = "";
    for (let y = 0; y < arr.length; y++) {
      for (let x = arr.length - 1; x >= 0; x--) {
        const element = arr[x][y];
        newShape += element;
      }
      newShape += "\n";
    }
    return newShape;
  }

  drawOrientations(shape, nrOfOrientations) {
    const orientations = [];
    orientations[0] = shape;
    for (let i = 1; i < nrOfOrientations; i++) {
      orientations[i] = this.rotateShape(orientations[i - 1]);
    }

    return orientations;
  }

  arrayToShape(arr) {
    return arr.join("\n");
  }

  shapeToArray(str) {
    return str.split("\n").filter(Boolean);
  }

  rotateRight() {
    const orientation =
      this.orientation === this.nrOfOrientations - 1 ? 0 : this.orientation + 1;

    return new RotatingShape(
      this.orientations[orientation],
      this.nrOfOrientations,
      orientation,
      this.orientations
    );
  }

  rotateLeft() {
    const orientation =
      this.orientation === 0 ? this.nrOfOrientations - 1 : this.orientation - 1;

    return new RotatingShape(
      this.orientations[orientation],
      this.nrOfOrientations,
      orientation,
      this.orientations
    );
  }

  toString() {
    return this.orientations[this.orientation];
  }
}
