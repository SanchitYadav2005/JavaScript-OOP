String.prototype.yell = function() { // we assined a new funciton apart form function that are already defined.
    return `Omg you did it ${this.toUpperCase()}`;
}

console.log("we won".yell())

Array.prototype.pop = function(){ // we can also change what already assined funciton do.
    return `hello array`
}

console.log([0,1].pop())