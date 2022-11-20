// Object Literal
const book1 = {
  title: 'Book One',
  author: 'John Doe',
  year: '2013',
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book1);
console.log(Object.keys(book1));
console.log(Object.values(book1));
console.log(book1.getSummary());

// What if we wanted to create more than one book?

// Constructors es5 without prototypes
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

const book2 = new Book('Da new book', 'Robert Kirykowicz', '2022');

console.log(book2);
console.log(book2.getSummary());

// Constructors es5 with prototypes
function BookWithProto(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

BookWithProto.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

const book3 = new BookWithProto('Another new book', 'Katie', '2019');

console.log(book3);
console.log(book3.getSummary());

// An example with class syntax
class BookWithClasses {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

book4 = new BookWithClasses('A book on classes', 'George Kirykowicz', '1957');

console.log(book4);
console.log(book4.getSummary());
