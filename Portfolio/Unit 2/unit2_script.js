// Define the Shape class
class Shape {
    constructor(type, color) {
      this.type = type;
      this.color = color;
    }
  
    draw() {
      console.log(`Drawing a ${this.color} ${this.type}`);
    }
  }
  
  // Define the game object
  const game = {
    shapes: ['circle', 'square', 'triangle'],
    colors: ['red', 'blue', 'green', 'yellow'],
  
    // Method to generate a random shape
    generateRandomShape() {
      const randomType = this.shapes[Math.floor(Math.random() * this.shapes.length)];
      const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
      return new Shape(randomType, randomColor);
    }
  };
  
  // Add event listener for button click
  document.getElementById('generateShapeBtn').addEventListener('click', function() {
    const shape = game.generateRandomShape();
    shape.draw();
  });
  