
/*

class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }
      
  greet() {
    console.log("Hi there, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
  }
}

//es6 syntax
export default Person;

//webpack syntax
//module.exports = Person;



/*
when webpack attempts to require-in a file, it is looking for an object named exports.

i.e.

if include:
exports.exampleProperty
exports.exampleFunction

when you run console.log(Person) from App.js, the properties will show up.

Here, [Line 9], we want exports object to equal the Person the constructor function.

export's parent object = module, therefore - module.exports = Person - sets exports equal to the Person constructor function.  

*/