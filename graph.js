const Node = require('./node');

class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(name) {
        this.adjList[name] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjList[vertex1].push(vertex2);
        this.adjList[vertex2].push(vertex1);
    }

    removeEdge(v1, v2) {
        this.adjList[v1] = this.adjList[v1].filter(val => val !== v2)
        this.adjList[v2] = this.adjList[v2].filter(val => val !== v1)
    }

    removeVertex(name) {
        this.adjList[name].forEach(val => this.removeEdge(name, val));
        delete this.adjList[name];
    }
}

const node1 = new Node('Hello');

const node2 = new Node('Goodbye');

const node3 = new Node("something")

const graph = new Graph();

graph.addVertex(node1.value);
graph.addVertex(node2.value);
graph.addVertex(node3.value);
graph.addEdge(node2.value, node3.value);
graph.addEdge(node1.value, node2.value)
graph.addEdge(node1.value, node3.value);

graph.removeVertex(node1.value)


console.log(graph.adjList)

