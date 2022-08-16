class Car {

    constructor(name, owner){
        console.log("constructor is working!")
        this.carName = name;
        this.ownerName = owner;
    }

    onlyName(){
        return `name: ${this.carName}`;
    }

    onlyOwner(){
        return `Owner: ${this.ownerName}`
    }

    fullDetail(){
        return `This is the car: ${this.carName} and this is the owner: ${this.ownerName}`
    }

}

const car1 = new Car("BMW", "SANCHIT")
const car2 = new Car("Audi", "S")
console.log(car1.fullDetail());
console.log(car2.onlyOwner())