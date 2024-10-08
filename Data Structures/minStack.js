


// https://leetcode.com/problems/min-stack/description/?envType=study-plan-v2&envId=top-interview-150






var MinStack = function(aa) {
    this.arr = [];
    this.min = [];
};


MinStack.prototype.push = function(val) {
    this.arr.push(val);
    this.min.push(val);
    this.min = this.min.sort((a,b) =>  a-b);
};

MinStack.prototype.pop = function() {
    let deleted = this.arr.pop();
    const index = this.min.indexOf(deleted);
    if (index > -1) { // only splice array when item is found
        this.min.splice(index, 1); // 2nd parameter means remove one item only
    }
    console.log('min arra = ', this.min);
    this.min = this.min.sort((a,b) =>  a-b);
};

MinStack.prototype.top = function() {
    return this.arr[this.arr.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.min[0];
};



var x= new MinStack()
console.log(x);
x.push(-2);
console.log(x);
x.push(0);
console.log(x);
x.push(-3);
console.log(x);
console.log('min = ', x.getMin());
x.pop();
console.log(x);
console.log(x.top());
console.log('min = ', x.getMin());
