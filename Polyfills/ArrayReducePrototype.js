// array.reduce prototype

let a = [3,5,6,2]
let sum = 16;


Array.prototype.myReduce = function(func, initial) {
    let total = initial ? initial : 0;
    this.forEach((v,i) => {
        total = func(total, v, i, this);
    });
    return total;
}

var y = a.myReduce((agg, current, currentIndex, array) => agg + current, 0);
console.log(y)