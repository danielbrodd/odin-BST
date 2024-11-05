import Node from "./node.js";

class Tree {
    constructor(array){
        const sortedArray = [... new Set(array)].sort((a,b) => a - b);
        this.node = this.buildTree(sortedArray);
    }

    buildTree(array) {
        if (array.length === 0) return null;

        let midIndex =  Math.floor(array.length / 2);
        let midValue = array[midIndex];
        let node = new Node(midValue)

        let left = array.slice(0, midIndex);
        let right = array.slice(midIndex + 1);

        node.left = this.buildTree(left);
        node.right = this.buildTree(right);

        return node
    }
    insert(value, node = this.root) {
        if (node === null) node.data = new Node(value);

        if (node.data === value) throw new Error("No duplicates allowed");

        if (value < node.data) {
            node.left = this.insert(value, node.left)
        } else if (value > node.data) {
            node.right = this.insert(value, node.right)
        }
    }
}