import Node from "./node.js";

class Tree {
    constructor(array){
        const sortedArray = [... new Set(array)].sort((a,b) => a - b);
        this.root = this.buildTree(sortedArray);
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
}