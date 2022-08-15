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

