class Leaf {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Create leaves for the tree
  const head = new Leaf(5);
  const leaf2 = new Leaf(3);
  const leaf3 = new Leaf(8);
  const leaf4 = new Leaf(1);
  const leaf5 = new Leaf(4);
  const leaf6 = new Leaf(7);
  const leaf7 = new Leaf(9);
  const leaf8 = new Leaf(2);
  const leaf9 = new Leaf(6);
  const leaf10 = new Leaf(10);
  
  // Connect leaves to form a binary tree
  head.left = leaf2;
  head.right = leaf3;
  leaf2.left = leaf4;
  leaf2.right = leaf5;
  leaf3.left = leaf6;
  leaf3.right = leaf7;
  leaf4.left = leaf8;
  leaf6.left = leaf9;
  leaf7.right = leaf10;
  
  // Depth First Search function
  function depthFirstSearch(node, depthArray) {
    if (node !== null) {
      depthFirstSearch(node.left, depthArray);
      depthArray.push(node.value);
      depthFirstSearch(node.right, depthArray);
    }
  }
  
  // Breadth First Search function
  function breadthFirstSearch(node, breadthArray) {
    const queue = [node];
    while (queue.length > 0) {
      const current = queue.shift();
      breadthArray.push(current.value);
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }
  }
  
  // Arrays to store depth and breadth search results
  const depthArray = [];
  const breadthArray = [];
  
  // Perform Depth First Search
  depthFirstSearch(head, depthArray);
  
  // Perform Breadth First Search
  breadthFirstSearch(head, breadthArray);
  
  // Display results on the HTML page
  document.getElementById('depthArray').textContent = 'Depth First Search: ' + depthArray.join(', ');
  document.getElementById('breadthArray').textContent = 'Breadth First Search: ' + breadthArray.join(', ');
  