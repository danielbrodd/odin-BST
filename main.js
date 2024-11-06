import Tree from "./tree.js";

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

let array = [10,20,30,40,50,80,70,60]

let tree = new Tree(array)


tree.insert(90)



prettyPrint(tree.root)

tree.deleteItem(50)

prettyPrint(tree.root)

let res = tree.find(80)
console.log(`res: ${res.data}`)

tree.levelOrder(console.log)