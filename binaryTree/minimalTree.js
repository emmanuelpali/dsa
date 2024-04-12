//Given a sorted array with unique integer elements, write an algorithm to create a binary search tree with minimal height

//Solution: Use a recursive approach to create a binary search tree with minimal height

class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const minimalTree = (arr) => {
    if(!arr.length) return null;
    return createMinimalTree(arr, 0, arr.length - 1);
}

const createMinimalTree = (arr, start, end) => {
    if(end < start) return null;
    const mid = Math.floor((start + end) / 2);
    const root = new TreeNode(arr[mid]);
    root.left = createMinimalTree(arr, start, mid - 1);
    root.right = createMinimalTree(arr, mid + 1, end);
    return root;
}

//example

const arr = [1, 2, 3, 4, 5, 6, 7];
const root = minimalTree(arr);

const iterateMinimalTreeInOrder = (root) => {
    if(!root) return;
    iterateMinimalTreeInOrder(root.left);
    console.log(root.value, '=> In order');
    iterateMinimalTreeInOrder(root.right);
}

iterateMinimalTreeInOrder(root); // 1 2 3 4 5 6 7

const iterateMinimalTreePreOrder = (root) => {
    if(!root) return;
    console.log(root.value, '=> Pre order');
    iterateMinimalTreePreOrder(root.left);
    iterateMinimalTreePreOrder(root.right);
}

iterateMinimalTreePreOrder(root); // 4 2 1 3 6 5 7

const iterateMinimalTreePostOrder = (root) => {
    if(!root) return;
    iterateMinimalTreePostOrder(root.left);
    iterateMinimalTreePostOrder(root.right);
    console.log(root.value, '=> Post order');
}

iterateMinimalTreePostOrder(root); // 1 3 2 5 7 6 4