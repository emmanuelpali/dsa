const QNode = (data) => {
    this.data = data;
    this.next = null;
    this.length = 0;
}
class Queue {
    constructor() {
        this.front = this.rear = null;
    }
    enqueue(data) {
        const temp = new QNode(data);
        if (this.rear === null) {
            this.front = this.rear = temp;
            return;
        }
        this.rear.next = temp;
        this.rear = temp;
        this.length++;
    }
    dequeue() {
        if (this.front === null) return;
        const temp = this.front;
        this.front = this.front.next;
        temp.next = null;
        if (this.front === null) this.rear = null;
        this.length--;
        if(this.length === 0) this.front = this.rear = null;
        return temp.data;
    }
    isEmpty() {
        return this.front === null;
    }
    peek() {
        return this.front.data;
    }
}


const generateBinaryNumbers = (n) => {
    const result = [];
    const queue = [];
    queue.push('1');
    while (n--) {
        const current = queue.shift();
        result.push(current);
        queue.push(current + '0');
        queue.push(current + '1');
    }
    return result;
    }

console.log(generateBinaryNumbers(10)); // [ '1', '10', '11', '100', '101' ]