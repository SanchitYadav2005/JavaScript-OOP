String.prototype.yell = function() { // we assined a new funciton apart form function that are already defined.
    return `Omg you did it ${this.toUpperCase()}`;
}

console.log("we won".yell())
