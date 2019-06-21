// Business Logic for PizzaPlace //

//--- This is a CONSTRUCTOR ---//
function PizzaPlace() {
  this.toppings = [],
  this.sizes = []
}

//--- This is a PROTOTYPE ---//
PizzaPlace.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

PizzaPlace.prototype.addSize = function(size) {
  this.sizes.push(size);
}

// Business Logic for Toppings //

//--- This is an OBJECT ---//
function Toppings(firstTopping, secondTopping, thirdTopping, fourthTopping, fifthTopping){
  this.firstTopping = firstTopping,
  this.secondTopping = secondTopping,
  this.thirdTopping = thirdTopping,
  this.fourthTopping = fourthTopping,
  this.fifthTopping = fifthTopping,
}

function Sizes(small, medium, large) {
  this.small= small,
  this.medium = medium,
  this.large = large,
}
