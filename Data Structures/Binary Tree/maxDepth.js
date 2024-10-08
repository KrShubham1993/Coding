

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

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



let max;
var maxDepth = function(root) {
    if(!root.left && !root.right) {
        
        console.log('ret 1 and root= ', root);
        return 1;
    }
    if(root.left) {
        console.log('recursion and roo.left = ', root.left);
        max = 1 + maxDepth(root.left);
        console.log('exiting if root.left and max = ', max);
    }
    if(root.right) {
        console.log('recursion and roo.right = ', root.right);
        max = 1 + maxDepth(root.right);
        console.log('exiting if root.right and max = ', max);
    }
    return max;
};

// var array = [3,9,20,null,null,15,7]

// var array = [
//     8, 
//     10, 12, 
//     5, 3, 6, 4, 
//     5, 6, 7, 8, 5, 6, 7, 8,
//     5, 6, 7, 8, 5, 6, 7, 8, 5, 6, 7, 8, 5, 6, 7, 8,
//     5, 6, 7, 8, 5, 6, 7, 8, 5, 6, 7, 8, 5, 6, 7, 8, 5, 6, 7, 8, 5, 6, 7, 8, 5, 6, 7, 8, 5, 6, 7, 8,
// ];

var array = [
    8, 
    null, 12, 
         5, 3,
    null, 6, 7, 8,
        5, null, null, null];

let tree = buildBinaryTree(array);
console.log('tree = ', tree);
max = maxDepth(tree);
console.log(max);
