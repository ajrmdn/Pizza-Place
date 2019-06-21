// Business Logic for PizzaPlace //

//--- This is a CONSTRUCTOR ---//
function PizzaPlace() {
  this.toppings = [],
  this.size = [],
}

//--- This is a PROTOTYPE ---//
PizzaPlace.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

PizzaPlace.prototype.addSize = function(size) {
  this.size.push(size);
}

// Business Logic for Toppings and Sizes //

//--- This is an OBJECT ---//
function Pizza(toppings, size){
  this.toppings = toppings
  this.size = size
}
