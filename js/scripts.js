// Business Logic for PizzaPlace //

//--- This is a CONSTRUCTOR ---//
function PizzaPlace() {
  this.toppings = [],
  this.size = [],
}

//--- These are a PROTOTYPE ---//
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

//--- These are PROPERTIES ---//
$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    var sizeInput = parseInt($(#size).val());
    var artichoke = { name: "Artichoke", price: 1};
    var olives = { name: "Olives", price: 1};
    var jalepeno = { name: "Jalepeno", price: 1};
    var tomato = { name: "Tomato", price: 1};
    var cheese = { name: "Cheese", price: 1};

    var pizzaToppings = { name: "Pizza Toppings", toppings: [artichoke, olives, jalepeno, tomato, cheese]};
