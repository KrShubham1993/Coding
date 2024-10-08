// we will maintain an array that will behave as min/max heap

// HEAP : In a heap, the highest (or lowest) priority element is always stored at the root

// Some constants related to binary heap-type-array
    // if length of array = say 10, then it will have [ log(base 2) 10 ] levels
    // Child : for element at i, 2*i+1 will be the left child and 2*i+2 will be right child
    // Parent : for element at i, Math.floor => (i-1)/2 ; will be the parent


class MinHeap {
    constructor() {
        this.array = [];
    }
    pushIntoHeap(item) {
        this.array.push(item);
        let current = this.array.length -1 ;
        while(current > 0) {
            let parent = Math.floor((current - 1) /2);
            if(this.array[current] < this.array[parent]) {
                [this.array[current],this.array[parent]] = [this.array[parent],this.array[current]];
                current = parent;
            }
            else break;
        }
        console.log('pushed ', item);
        console.log('heap so far = ', this.array);
    }
    pop() {
        let root = this.array[0];
        let lastChildIndex = this.array.length - 1;
        this.array[0] = this.array[lastChildIndex];
        this.array.pop();
        let current = 0;
        while(2*current + 1 < this.array.length) {
            let leftChildIndex = 2*current + 1;
            let rightChildIndex = 2*current + 2;
            let smallerChildIndex = rightChildIndex < this.array.length && this.array[leftChildIndex] > this.array[rightChildIndex] 
                                        ? rightChildIndex : leftChildIndex ;
            if(this.array[current] > this.array[smallerChildIndex]) {
                [this.array[current], this.array[smallerChildIndex]] = [this.array[smallerChildIndex], this.array[current]];
                current = smallerChildIndex;
            } else break;
        }
        return root;
    }
    createHeapFromArray(sample) {
        sample.forEach(v => this.pushIntoHeap(v));
        console.log('heap = ', this.array);
    }
}

const myMinHeap = new MinHeap();
let sample = [3,5,1,8,2,10];
myMinHeap.createHeapFromArray(sample);

// pops
console.log(myMinHeap.pop());
console.log(myMinHeap.array);

console.log(myMinHeap.pop());
console.log(myMinHeap.array);

console.log(myMinHeap.pop());
console.log(myMinHeap.array);

console.log(myMinHeap.pop());
console.log(myMinHeap.array);

console.log(myMinHeap.pop());
console.log(myMinHeap.array);

console.log(myMinHeap.pop());
console.log(myMinHeap.array);
