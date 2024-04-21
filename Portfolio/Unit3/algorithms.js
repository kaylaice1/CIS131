// Define the Leaf class
class Leaf {
    constructor(value, x, y) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.x = x;
        this.y = y;
        this.radius = 20; // Radius of the circle
    }
}

// Create leaves for the tree
const head = new Leaf(1, 400, 50);
const leaf2 = new Leaf(2, 300, 150);
const leaf3 = new Leaf(3, 500, 150);
const leaf4 = new Leaf(4, 200, 250);
const leaf5 = new Leaf(5, 350, 250);
const leaf6 = new Leaf(6, 450, 250);
const leaf7 = new Leaf(7, 600, 250);
const leaf8 = new Leaf(8, 150, 350);
const leaf9 = new Leaf(9, 250, 350);
const leaf10 = new Leaf(10, 400, 350);
const leaf11 = new Leaf(11, 550, 350); // New leaf
const leaf12 = new Leaf(12, 700, 350); // New leaf

// Construct the tree
head.left = leaf2;
head.right = leaf3;
leaf2.left = leaf4;
leaf2.right = leaf5;
leaf3.left = leaf6;
leaf3.right = leaf7;
leaf4.left = leaf8;
leaf4.right = leaf9;
leaf5.left = leaf10;
leaf6.left = leaf11; // Connect leaf6 to new leaf11
leaf7.right = leaf12; // Connect leaf7 to new leaf12

// Get canvas element and context
const canvas = document.getElementById('treeCanvas');
const ctx = canvas.getContext('2d');

// Function to draw a leaf node
function drawLeaf(leaf) {
    ctx.beginPath();
    ctx.arc(leaf.x, leaf.y, leaf.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillText(leaf.value, leaf.x - 5, leaf.y + 5);
}

// Function to draw a line between two points
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

// Function to draw the tree
function drawTree(node) {
    if (!node) return;
    drawLeaf(node);
    if (node.left) {
        const angle = Math.atan2(node.left.y - node.y, node.left.x - node.x);
        const x1 = node.x + node.radius * Math.cos(angle);
        const y1 = node.y + node.radius * Math.sin(angle);
        const x2 = node.left.x - node.left.radius * Math.cos(angle);
        const y2 = node.left.y - node.left.radius * Math.sin(angle);
        drawLine(x1, y1, x2, y2);
        drawTree(node.left);
    }
    if (node.right) {
        const angle = Math.atan2(node.right.y - node.y, node.right.x - node.x);
        const x1 = node.x + node.radius * Math.cos(angle);
        const y1 = node.y + node.radius * Math.sin(angle);
        const x2 = node.right.x - node.right.radius * Math.cos(angle);
        const y2 = node.right.y - node.right.radius * Math.sin(angle);
        drawLine(x1, y1, x2, y2);
        drawTree(node.right);
    }
}

// Draw the initial tree
drawTree(head);

document.getElementById("depthBtn").addEventListener("click", function() {
    const number = parseInt(document.getElementById("highlightNumber").value);
    if (!isNaN(number)) {
        const depthArray = [];
        depthFirstSearchWithHighlight(head, number, depthArray, { value: false }); // Perform depth-first search with the target number
        console.log('Depth First Search:', depthArray.join(', ')); // Log the result
    }
});

document.getElementById("breadthBtn").addEventListener("click", function() {
    const number = parseInt(document.getElementById("highlightNumber").value);
    if (!isNaN(number)) {
        const breadth = []; // Clear breadth array before each search
        breadthFirstSearchArray(head, breadth); // Call breadth-first search function
        const nodesToHighlight = breadth.slice(0, number); // Get nodes to highlight up to the specified number
        highlightNodes(nodesToHighlight, number); // Start highlighting nodes one by one
        console.log('Breadth First Search:', breadth.join(', ')); // Log the result
    }
});

// Function to highlight the next node based on the search result
function highlightNextNode(nodes, currentIndex) {
    if (currentIndex >= nodes.length) return; // Stop if all nodes have been highlighted
    const nodeValue = nodes[currentIndex];
    unhighlightAllLeaves(); // Unhighlight all nodes
    highlightNodeWithValue(head, nodeValue); // Highlight the current node
    setTimeout(() => {
        highlightNextNode(nodes, currentIndex + 1); // Highlight the next node after a delay
    }, 1000); // Adjust delay as needed (in milliseconds)
}

// Function to highlight nodes based on the search result
function highlightNodes(nodes, targetNumber) {
    const nodesToHighlight = nodes.slice(0, targetNumber); // Get nodes to highlight up to the specified number
    highlightNextNode(nodesToHighlight, 0); // Start highlighting nodes one by one
}

// Function to highlight a node with a specific value
function highlightNodeWithValue(node, value) {
    if (!node) return;
    if (node.value === value) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "yellow"; // Highlight color
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "black";
        ctx.fillText(node.value, node.x - 5, node.y + 5);
    }
    highlightNodeWithValue(node.left, value);
    highlightNodeWithValue(node.right, value);
}

// Function to unhighlight all leaves
function unhighlightAllLeaves() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTree(head);
}

// Function for depth-first search
function depthFirstSearchArray(node, target, result, found) {
    if (!node) return;
    if (node.value === target) {
        found.value = true;
        result.push(node.value);
    }
    depthFirstSearchArray(node.left, target, result, found);
    depthFirstSearchArray(node.right, target, result, found);
}

// Function for breadth-first search
function breadthFirstSearchArray(node, result) {
    const queue = [];
    queue.push(node);
    while (queue.length > 0) {
        const current = queue.shift();
        result.push(current.value);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
}

// Function for depth-first search with highlighting
function depthFirstSearchWithHighlight(node, target, result, found) {
    if (!node) return;
    if (node.value === target) {
        found.value = true;
        result.push(node.value);
        return;
    }
    if (!found.value) {
        highlightNodeWithValue(node); // Highlight the current node
        setTimeout(() => {
            unhighlightNodeWithValue(node); // Unhighlight the current node after a delay
        }, 1000); // Adjust delay as needed (in milliseconds)
    }
    depthFirstSearchWithHighlight(node.left, target, result, found);
    if (!found.value) {
        highlightNodeWithValue(node); // Highlight the current node
        setTimeout(() => {
            unhighlightNodeWithValue(node); // Unhighlight the current node after a delay
        }, 1000); // Adjust delay as needed (in milliseconds)
    }
    depthFirstSearchWithHighlight(node.right, target, result, found);
}

// Function to unhighlight a node with a specific value
function unhighlightNodeWithValue(node) {
    if (!node) return;
    ctx.clearRect(node.x - node.radius - 1, node.y - node.radius - 1, 2 * node.radius + 2, 2 * node.radius + 2);
    drawLeaf(node);
}
