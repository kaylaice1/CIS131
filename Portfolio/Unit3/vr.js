AFRAME.registerComponent('custom-controls', {
    init: function () {
      this.keys = {};
      this.addEventListeners();
    },
  
    addEventListeners: function () {
      var self = this;
      window.addEventListener('keydown', function (event) {
        self.keys[event.code] = true;
      });
      window.addEventListener('keyup', function (event) {
        delete self.keys[event.code];
      });
    },
  
    tick: function () {
      // Get the camera entity
      var camera = this.el.querySelector('[camera]');
      if (!camera) return;
  
      // Get the position of the camera entity
      var currentPosition = this.el.getAttribute('position');
      if (!currentPosition) return;
  
      // Movement speed
      var movementSpeed = 0.05;
  
      // Calculate the new position based on pressed keys
      var newPosition = {
        x: currentPosition.x,
        y: currentPosition.y,
        z: currentPosition.z
      };
  
      // Calculate the direction vector based on the camera's rotation
      var directionVector = new THREE.Vector3();
      directionVector.setFromMatrixColumn(camera.object3D.matrix, 0);
      directionVector.y = 0; // Keep the movement in the horizontal plane
      directionVector.normalize();
  
      // Move forward when "W" key is pressed
      if (this.keys['KeyW']) {
        newPosition.x += directionVector.x * movementSpeed;
        newPosition.z += directionVector.z * movementSpeed;
      }
  
      // Move backward when "S" key is pressed
      if (this.keys['KeyS']) {
        newPosition.x -= directionVector.x * movementSpeed;
        newPosition.z -= directionVector.z * movementSpeed;
      }
  
      // Move left when "A" key is pressed
      if (this.keys['KeyA']) {
        var leftVector = new THREE.Vector3(-directionVector.z, 0, directionVector.x);
        newPosition.x += leftVector.x * movementSpeed;
        newPosition.z += leftVector.z * movementSpeed;
      }
  
      // Move right when "D" key is pressed
      if (this.keys['KeyD']) {
        var rightVector = new THREE.Vector3(directionVector.z, 0, -directionVector.x);
        newPosition.x += rightVector.x * movementSpeed;
        newPosition.z += rightVector.z * movementSpeed;
      }
  
      // Move upward when "Space" key is pressed
      if (this.keys['Space']) {
        newPosition.y += movementSpeed;
      }
  
      // Move downward when "Shift" key is pressed
      if (this.keys['ShiftLeft']) {
        newPosition.y -= movementSpeed;
      }
  
      // Update the camera's position
      this.el.setAttribute('position', newPosition);
    }
  });
  