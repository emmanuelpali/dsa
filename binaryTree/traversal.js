// PreOrder Traversal Recursive
const preOrderTraversal = (root) => {
  if (!root) return;
  console.log(root.val);
  preOrderTraversal(root.left);
  preOrderTraversal(root.right);
}

// PreOrder Traversal Iterative
const preOrderTraversalIterative = (root) => {
  if (!root) return;
  const stack = [root];
  while (stack.length) {
    const current = stack.pop();
    console.log(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
}
// example
const root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};
console.log("PreOrder" + preOrderTraversal(root)); // 1 2 3

// InOrder Traversal Recursive
const inOrderTraversal = (root) => {
  if (!root) return;
  inOrderTraversal(root.left);
  console.log(root.val);
  inOrderTraversal(root.right);
}
//example

console.log(inOrderTraversal(root)); // 2 1 3

// InOrder Traversal Iterative
const inOrderTraversalIterative = (root) => {
  if (!root) return;
  const stack = [];
  let current = root;
  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    console.log(current.val);
    current = current.right;
  }
}

// PostOrder Traversal Recursive
const postOrderTraversal = (root) => {
  if (!root) return;
  postOrderTraversal(root.left);
  postOrderTraversal(root.right);
  console.log(root.val);
}

// PostOrder Traversal Iterative
const postOrderTraversalIterative = (root) => {
  if (!root) return;
  const stack = [root];
  while (stack.length) {
    const current = stack.pop();
    result.unshift(current.val);
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  for (let val of result) {
    console.log(val);
  }
}
//example
console.log("PostOrder",postOrderTraversal(root)); // 2 3 1

// LevelOrder Traversal
const levelOrderTraversal = (root) => {
  if (!root) return;
  const queue = [root];
  while (queue.length) {
    const current = queue.shift();
    console.log(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
}
//example
console.log(levelOrderTraversal(root)); // 1 2 3

// breadthFirstSearch
const breadthFirstSearch = (root, target) => {
  if (!root) return;
  const queue = [root];
  while (queue.length) {
    const current = queue.shift();
    if (current.val === target) return true;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return false;
}

//example
console.log(breadthFirstSearch(root, 3)); // true

// depthFirstSearch
const depthFirstSearch = (root, target) => {
  if (!root) return;
  if (root.val === target) return true;
  return depthFirstSearch(root.left, target) || depthFirstSearch(root.right, target);
}
