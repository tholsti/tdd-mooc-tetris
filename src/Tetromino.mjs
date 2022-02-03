import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino extends RotatingShape {
  static get T_SHAPE() {
    return new Tetromino(`.T.
                          TTT
                          ...`);
  }

  static get I_SHAPE() {
    return new Tetromino(
      `.....
       .....
       IIII.
       .....
       .....`,
      2
    );
  }

  static get O_SHAPE() {
    return new Tetromino(
      `.OO
       .OO
       ...`,
      1
    );
  }
}
