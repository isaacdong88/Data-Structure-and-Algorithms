//Class is a blueprint for creating objects with pre-defined prperties and methods

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
  }
  fullName() {
    return `Full name is, ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    return `You have ${this.tardies} tardies`;
  }

  static enrollStudents() {
    return "Enrolled";
  }
}

let tom = new Student("Tom", "Hank");
console.log(tom.firstName);
console.log(tom.fullName());
console.log(tom.markLate());
console.log(Student.enrollStudents());

//instance methods provide functionality on a single instance created as students in the example
//fullName markLate

//Class methods to static methods
//cant be called using the individual instance

//Keyword this
//Inside class all instance methods and constructor, this refers to the object created from
//that class
