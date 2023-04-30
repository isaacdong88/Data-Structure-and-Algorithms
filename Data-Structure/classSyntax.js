//Class is a blueprint for creating objects with pre-defined prperties and methods

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let tom = new Student("Tom", "Hank");
console.log(tom.firstName);
