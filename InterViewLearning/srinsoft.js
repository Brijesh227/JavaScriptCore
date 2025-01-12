const input = {
    a: 10,
    b: { c: 20, d: { e: 30, f: { g: 40 } } },
    h: [50, { i: 60 }]
};
 
// Expected Output:
// 210
let arr = [];

function flatObject(obj){
    for(const [key,val] of Object.entries(obj)) {
        if(typeof val === 'object') {
            flatObject(val)
        } else if(typeof val === 'number'){
            arr.push(val)
        }
    }    
}
flatObject(input);
console.log(arr);
console.log(arr.reduce((curr,acc) => curr+acc , 0));


// Binary tree traversal
// Challenge: Implement functions for pre-order, in-order, and post-order traversal of a binary tree.
const tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
            left: null,
            right: null
        },
        right: {
            value: 5,
            left: null,
            right: null
        }
    },
    right: {
        value: 3,
        left: null,
        right: {
            value: 6,
            left: null,
            right: null
        }
    }
};

//              1
//      2               3       
//4           5               6

// preorder => 1 2 4 5 3 6
// inorder => 4 2 5 1 3 6
// post order => 4 5 2 6 3 1

let preOrder = []
function preOrderTraversal(tree){
    if(tree === null){
        return;
    }
    console.log('val',tree.value);
    preOrderTraversal(tree.left);
    preOrderTraversal(tree.right);
}
preOrderTraversal(tree);

console.log(preOrder);