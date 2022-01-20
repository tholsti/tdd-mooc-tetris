export class Board {
  width;
  height;
  blocks;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.blocks = [];
  }

  drop(block) {
    block.set(Math.floor(this.width / 2), 0);
    this.blocks.push(block);
    if (this.blocks.filter((block) => block.falling).length > 1) {
      throw new Error("already falling");
    }
  }

  tick() {
    this.blocks.forEach((block) => {
      if (block.falling) {
        block.y++;
        if (this.hitBottom(block) || this.hitBlock(block)) {
          block.falling = false;
          block.y -= 1;
        }
      }
    });
  }

  hitBottom(block) {
    return block.y === this.height;
  }

  hitBlock(block) {
    const { x, y } = block;
    return (
      this.blocks.filter((block) => block.y === y && block.x === x).length === 2
    );
  }

  findBlock(x, y) {
    return this.blocks.find((block) => block.x === x && block.y === y);
  }

  hasFalling() {
    return !!this.blocks.some((block) => block.falling);
  }

  toString() {
    let board = "";
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const block = this.findBlock(x, y);
        if (!!block) {
          board += block.color;
        } else {
          board += ".";
        }
      }
      board += "\n";
    }
    return board;
  }
}
