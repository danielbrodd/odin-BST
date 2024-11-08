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

// let array = [10,20,30,40,50,70,60]

// let tree = new Tree(array)


// tree.insert(90)
// prettyPrint(tree.root)

// console.log('-------Delete-------')
// tree.deleteItem(90)

// console.log('-------Find-------')
// console.log(tree.find(30))




// prettyPrint(tree.root)

// let res = tree.find(80)
// console.log(`res: ${res}`)
// console.log('-------LevelOrder Traversal-------')
// tree.levelOrder(console.log)
// console.log('-------InOrder Traversal-------')
// tree.inOrder(console.log);
// console.log('-------PreOrder Traversal-------')
// prettyPrint(tree.root)
// tree.preOrder(console.log)
// console.log('-------PostOrder Traversal-------')
// prettyPrint(tree.root)
// tree.postOrder(console.log)

// console.log('-------Depth-------')
// console.log(tree.depth(50))
// console.log('-------Height-------')
// tree.height(50)
// console.log('-------isBalanced-------')
// console.log(tree.isBalanced())
// console.log('-------isBalanced/false-------')
// tree.insert(90);
// tree.insert(95);
// console.log(tree.isBalanced());
// prettyPrint(tree.root);
// tree.reBalance();
// prettyPrint(tree.root);

// console.log('-------Reset tree-------');
// tree.deleteItem(90);
// tree.deleteItem(95);

// prettyPrint(tree.root)
// console.log(tree.isBalanced())
// tree.reBalance()
// prettyPrint(tree.root)



function randArray(n=10){
  let array = [];
  for (let i = 0; i < 10; i++){
    array.push(Math.floor(Math.random() * 100));
  };
  return array
};

let randomArray = randArray();
console.log(randomArray)

let tree = new Tree(randomArray)
prettyPrint(tree.root)
console.log('---level---')
tree.levelOrder(node => {
  console.log(node.data)
})
console.log('---pre---')
tree.preOrder(node => {
  console.log(node.data)
})
console.log('---in---')
tree.inOrder(node => {
  console.log(node.data)
})
console.log('---post---')
tree.postOrder(node => {
  console.log(node.data)
})
console.log(tree.isBalanced());

tree.insert(340)
tree.insert(540)
tree.insert(7040)
tree.insert(720)
tree.insert(136)

prettyPrint(tree.root)

console.log(tree.isBalanced())

tree.reBalance()
console.log(tree.isBalanced())
prettyPrint(tree.root)

console.log('---level---')
tree.levelOrder(node => {
  console.log(node.data)
})
console.log('---pre---')
tree.preOrder(node => {
  console.log(node.data)
})
console.log('---in---')
tree.inOrder(node => {
  console.log(node.data)
})
console.log('---post---')
tree.postOrder(node => {
  console.log(node.data)
})