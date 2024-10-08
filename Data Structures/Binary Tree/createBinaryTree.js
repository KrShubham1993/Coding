// create a binary tree from an array.

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
// Riyansh version w/o null entry
// const buildBinaryTree = (array) => {
//     let root = new Node(array[0]);
//     let q = [];
//     q.push(root);
//     let i = 1;
//     while(q.length != 0) {
//         let node = q.shift();
//         if(i < array.length && node.left == null) {
//             node.left = new Node(array[i]);
//             q.push(node.left);
//             i++;
//         }

//         if(i < array.length && node.right == null) {
//             node.right = new Node(array[i]);
//             q.push(node.right);
//             i++;
//         }
//     }
//     return root;
// }

function buildBinaryTree(arr) {
    let currentNode, root;
    let q = [];
    let attached = 0;
    arr.forEach((v,i) => {
        let node = v ? new Node(v) : null;
        if(i==0){
            currentNode = node;
            root = node;
        } else {
            if(attached == 2) {
                currentNode = q.shift();
                attached = 0;
            }
            if(attached == 0 && !currentNode.left) currentNode.left = node;
            else currentNode.right = node;
            if(node) {
                q.push(node); // nodes are pushed in the sequence of their creation.
            }
            attached += 1; 
        }
        console.log('v = ', v, 'root = ', root);
    });
    return root;
}

const bfs = (root) => {
    let q = [root];
    while(q.length != 0) {
        let node = q.shift();
        console.log(node.value);
        if(node.left != null) q.push(node.left);
        if(node.right != null) q.push(node.right);
    }
}

// var array = [8, 10, 12, 5, 3, 6, 4,5, 6,7];
// var array = [3,9,20,null,null,15,7, 3,3,3,3]

var array = [
    8, 
    null, 12, 
         5, 3,
    null, 6, 7, 8,
        5, null, null, null];
let tree = buildBinaryTree(array);
console.log(tree);
bfs(tree);
