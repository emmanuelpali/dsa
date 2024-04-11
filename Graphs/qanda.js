//Given a directed graph and two nodes (S and E), design an algorithm to find out whether there is a route route from S to E
//Solution: Use BFS to traverse the graph and check if the end node is reachable from the start node
const findRoute = (graph, start, end) => {
    const visited = new Set();
    const queue = [start];
    visited.add(start);
    while(queue.length) {
        const current = queue.shift();
        if(current === end) return true;
        console.log(current);
        visited.add(current);
        for(const char of graph[current]) {
            if(!visited.has(char)) {
                queue.push(char);
                visited.add(char);
            }
        }
    }
    return false;
}

// Example
const graph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['E'],
    D: ['E'],
    E: []
}

console.log(findRoute(graph, 'A', 'E')); // true
console.log(findRoute(graph, 'B', 'C')); // false