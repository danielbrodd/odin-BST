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
        if (node === null) {
            console.log('[Error]: Value not found');
            return undefined
        };

        if (data < node.data) {
            return this.find(data, node.left);
        } else if (data > node.data){
            return this.find(data, node.right)
        } else {
            return node
        }
    }
    levelOrder(callback) {
        if (typeof arguments[0] !== 'function'){
            throw new Error("Callback function required")
        };
        let queue = []
        queue.push(this.root);

        while (queue.length > 0){
            let node = queue.shift();
            callback(node);
            if (node.left !== null){
                queue.push(node.left);
            }
            if (node.right !== null){
                queue.push(node.right);
            }
            
        }
    }
    inOrder(callback, node = this.root){
        if (arguments.length !== 1 && typeof arguments[0] !== 'function'){
            throw new Error("Callback function required")
        };
        if (node === null) return;

        
        this.inOrder(callback, node.left);
        callback(node);
        this.inOrder(callback,node.right)
    }
    preOrder(callback, node = this.root){
        if (typeof arguments[0] !== 'function'){
            throw new Error("Callback function required")
        };
        if(node === null) return

        callback(node);
        this.preOrder(callback, node.left);
        this.preOrder(callback, node.right)
    }
    postOrder(callback, node = this.root){
        if (typeof arguments[0] !== 'function'){
            throw new Error("Callback function required")
        };
        if (node === null) return

        this.postOrder(callback, node.left)
        this.postOrder(callback, node.right)
        callback(node);
    }
    depth(data, node = this.root){
        if (node === null) return;
        let depth = 0
        let queue = [];
        queue.push(node);
        while (queue.length > 0) {
            let n = queue.length;
            for (let i = 0; i < n; i++) {
                let curr = queue.shift();
                if (curr.data === data) return depth
                if (curr.left !== null) queue.push(curr.left);
                if (curr.right !== null) queue.push(curr.right);
            }
            depth++;
        }
        return 'not found'
    }
    height(data) {
        let node = this.find(data);
        if (node === undefined) return -1
 
        return this._heightHelper(node);

    }
    isBalanced(node = this.root){
        if (node === null) return true
        let leftHeight = node.left ? this.height(node.left.data) : 0;
        let rightHeight = node.right ? this.height(node.right.data) : 0;

        if (Math.abs(leftHeight - rightHeight) > 1) return false;
        
        let isLeftBalanced = this.isBalanced(node.left);
        let isRightBalanced = this.isBalanced(node.right);

        return isLeftBalanced && isRightBalanced
    }
    reBalance(){
        let newArray = [];

        this.inOrder((node) => {
            newArray.push(node.data)
        })
        if (newArray.length > 0){
            this.root = this.buildTree(newArray)
        };
    }
    
    _heightHelper(node) {
        if (node === null) return -1;

        let leftHeight = this._heightHelper(node.left)
        let rightHeight = this._heightHelper(node.right)

        return Math.max(leftHeight, rightHeight) + 1
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