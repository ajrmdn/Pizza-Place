// Business Logic //

//--- This is a CONSTRUCTOR ---//
function PizzaPlace() {
  this.toppings = [],
  this.size = []
}

PizzaPlace.prototype.addTopping = function(topping) {
  topping.id = this.assignId();
  this.toppings.push(topping);
}  
