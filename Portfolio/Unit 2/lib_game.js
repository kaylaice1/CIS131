class Player {
    constructor(name) {
      this.name = name;
      this.position = { x: 0, y: 0 };
    }
  
    move(x, y) {
      this.position.x += x;
      this.position.y += y;
      console.log(`${this.name} moved to (${this.position.x}, ${this.position.y})`);
    }
  
    hitBlock() {
      console.log(`${this.name} hit a block!`);
    }
  }