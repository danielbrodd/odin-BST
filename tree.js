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
    insert(data, node = this.root) {
        if (node === null) return new Node(data);

        if (node.data === data) throw new Error("No duplicates allowed");

        if (data < node.data) {
            node.left = this.insert(data, node.left)
        } else if (data > node.data) {
            node.right = this.insert(data, node.right)
        }
        return node
    }
    deleteItem(data, node = this.root) {
        if (node === null) return node;

        if (data < node.data) {
            node.left = this.deleteItem(data, node.left);
        } else if (data > node.data) {
            node.right = this.deleteItem(data, node.right);
        } else {
            if (node.left === null) return node.right;

            if (node.right === null) return node.left;

            let successor = this._getSuccessor(node);

            node.data = successor.data;
            node.right = this.deleteItem(successor.data, node.right);
        }
        return node
    }
    find(data, node = this.root) {
        if (node === null) return node;

        if (data < node.data) {
            this.find(data, node.left);
        } else if (data > node.data){
            this.find(data, node.right)
        } else {
            console.log(node)
            return node
        }
        return
    }
    _getSuccessor(curr) {
        curr = curr.right;

        while (curr !== null && curr.left !== null) {
            curr = curr.left;
        }
        return curr;
    }
}

export default Tree;