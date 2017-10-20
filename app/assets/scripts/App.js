var $ = require('jquery');

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), "85%");
new RevealOnScroll($('.testimonial'), "60%");









/*

ES6 Syntax
import Person from './modules/Person';
//var Person = require('./modules/Person');

enable jquery using webpack

//es 6
class Adult extends Person {
  payTaxes() {
      console.log(this.name + " now owes $0 in taxes");
  }    
}

alert("ABC 321");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();

*/