// example of extends keyword.


class Car {

    constructor(brand, topSpeed, engine, color){
        this.carname = brand;
        this.topspeed = topSpeed;
        this.engine = engine;
        this.color = color;
    }

    present(){
        return ` I have a ${this.carname}`
    }
}

class Model extends Car {

    speed(){
        console.log(`${this.present()} and it's top speed is 120`)
    }

}

class Specification extends Car{

    fullInfo(){
        const {brand, topspeed, engine, color} = this
        console.log(`Brand: ${brand}`)
        console.log(`Top Speed: ${topspeed}`);
        console.log(`Engine: ${engine}`)
        console.log(`Color: ${color}`);
    }

}

const Audi = new Specification("Audi", 120, "b4", "red");
Audi.fullInfo();
const Bmw = new Model("Bmw")
Bmw.speed()

// here is an example with super keyowrd.

class Pet {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating!`);
    }

}

class Cat extends Pet {
    constructor(name, age, lifeLeft = 6){
        super(name, age)
        this.lifeLeft = lifeLeft
    }
    meow(){
        console.log("Meoww!!!")
    }
    ageLeft(){
        console.log(`${this.lifeLeft}`)
    }

}

const kity = new Cat("Kity", 4)
kity.eat();
kity.ageLeft();