//Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth 

//Solution: Use BFS to traverse the tree and create a linked list of nodes at each depth

class listNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const makeList = (root) => {
    if(!root) return null;
//save the list in an array
    const result = [];
    let currentLevel = [root];

    while(currentLevel.length){
        let head = null;
        let tail = null;
        const nextLevel = [];
        for(const node of currentLevel){
            console.log(node.val);
            if(!head){
                head = new listNode(node.val);
                tail = head;
            }
            else {
                tail.next = new listNode(node.val);
                tail = tail.next;
            }
            if(node.left) nextLevel.push(node.left);
            if(node.right) nextLevel.push(node.right);
        }
        result.push(head);
        currentLevel = nextLevel;
    }
    return result;
}

//example

const root = { 
    val: 7,
    left: {
        val: 4,
        left: {
            val: 3,
        },
        right: {
            val: 5,
        },
    },
    right: {
        val: 9,
        left: {
            val: 8,
        },
        right: {
            val: 10,
        },
    },
};

console.log(makeList(root)); // [7] [4, 9] [3, 5, 8, 10]
