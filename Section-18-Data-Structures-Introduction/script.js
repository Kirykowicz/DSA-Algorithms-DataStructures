console.log("test");

// What do data structures do? Data structures are collections of values, the relationship among them, and the functions or operations that can be applied to the data.

// Class Syntax
// What is a class? - A blueprint for creating objects with pre-defined properties and methods

// The method to create new objects must be called constructor
// The class keyword creates a constant, so you can not redefine it. Watch out for syntax as well!

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  // Instance Methods .....

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "You are expelled!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }

  // Static Methods

  static enrollStudents() {
    return "ENROLLING STUDENTS";
  }
}

let firstStudent = new Student("Colt", "Steele", 1);
let secondStudent = new Student("Blue", "Steele", 2);

// Better exapmle of static methods

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));

// ------ RECAP ------
// Classes are blueprints that when created make objects known as instances
// Classes are created (instantiated) with the new keyword
// The constructor function is a special function that gets run when the class is instantiated
// Instance methods can be added to classes similar to methods in objects
// Class methods can be added using the static keyword
