const stackNode = (value) => {
  return {
    value,
    next: null,
  };
};

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }
    push(value) {
        const node = stackNode(value);
        if (!this.top) {
        this.top = node;
        } else {
        node.next = this.top;
        this.top = node;
        }
        this.length++;
    }
    pop() {
        if (!this.top) return null;
        const temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length--;
        return temp.value;
    }
    peek() {
        return this.top.value;
    }
    isEmpty() {
        return this.length === 0;
    }
    }
