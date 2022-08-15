// here I am going to make a contructor function 


function student(name, rollNo, studyClass) {
    this.name = name,
    this.rollNo = rollNo,
    this.studyClass = studyClass    
}

student.prototype.getOnlyName = function(){
    console.log(`this the name of student: ${this.name}`);
}

student.prototype.getFullInfo = function(){
    console.log(`Name: ${this.name}`);
    console.log(`Roll No: ${this.rollNo}`);
    console.log(`Class: ${this.studyClass}`)
}

const student1 = new student("Sanchit", 3, 12);

student1.getFullInfo();