console.log("working")

// this is a simple exapmle.

// creating a factory function.

function createEmployeeObject(name){
    return{
        name: name,
        work: function(){
            console.log("Created new employee with name: " + name)
        }
    }
}

// creating employee.

const emp1 = createEmployeeObject("Sanchit")
emp1.work()



// creating a gradge function for getting more practice on factory funciton.


console.log("---------------Welcome to Sanchit's Garadge---------------")
console.log("Here you can have premium cars");

function garadge(carName, carBrnad, carOwner){
    
    const detail = {};
    detail.carName = carName;
    detail.carBrnad = carBrnad;
    detail.carOwner = carOwner;
    detail.fullIntel = function(){
        console.log(`This is the car ${carName} is form ${carBrnad} which is belongs to ${carOwner}`)
    };
    
    return detail;
}

const firstCar = garadge("M4", "BMW", "Sanchit");
firstCar.fullIntel()

console.log("       ---------------Thank You---------------")