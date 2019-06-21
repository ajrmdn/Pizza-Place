// Business Logic for PizzaPlace //

//--- This is a CONSTRUCTOR ---//
function PizzaPlace() {
  this.toppings = [],
  this.size = [],
}

//--- These are PROTOTYPES ---//
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


// User Interface Logic for Pizza Place //

$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    //--- These are PROPERTIES ---//
    var small = { name: "Small", price: 10};
    var medium = { name: "Medium", price: 15};
    var large = { name: "Large", price: 25};
    var artichoke = { name: "Artichoke", price: 1};
    var olives = { name: "Olives", price: 1};
    var jalepeno = { name: "Jalepeno", price: 1};
    var tomato = { name: "Tomato", price: 1};
    var cheese = { name: "Cheese", price: 1};

    var pizzaToppings = { name: "Pizza Toppings", toppings: [artichoke, olives, jalepeno, tomato, cheese]};

    var pizzaSize = { name: "Pizza Size", size: [small, medium, large]};
