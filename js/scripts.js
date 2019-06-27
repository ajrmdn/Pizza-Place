// Business Logic for PizzaPlace //

// //--- This is a CONSTRUCTOR ---//
// function PizzaOrder() {
//   this.pizza = []
// }
//--- This is a CONSTRUCTOR ---//
function Pizza(size,topping) {
  this.size = size;
  this.topping = topping;
}

//--- These are PROTOTYPES ---//
// PizzaOrder.prototype.addPizza = function(Pizza) {
//   this.pizza.push(Pizza);
// }

Pizza.prototype.pizzaPrice = function() {
  if (this.size === "Small") {
    return (10 + this.topping.length)
  } else if (this.size === "Medium") {
    return (15 + this.topping.length)
  } else {
    return (20 + this.topping.length)
  }
}

// User Interface Logic for Pizza Place //

var pizzaOrder = new PizzaOrder();
$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();

    //--- These are PROPERTIES ---//
    var sizeInput = $('#pieSize').val();
    // toppings picked should contain an array of all the toppings that the user picked 
    var toppingsPicked = []
    var toppingInput =
      $('input:checkbox[name = numberOfToppings]:checked').each(function() {
        var checkedBoxes = $(this).val();
        totalToppings.push(' ' + checkedBoxes);
      });
    var newPizzaOrder = new PizzaOrder(sizeInput, toppingsPicked);
    PizzaOrder.addpizza(newPizzaOrder);
    var totalPrice = pizzaOrder.pizza[0].pizzaPrice();
    $('.output').show();
    $('#payment').text('$ ' + totalPrice + '.00');
    $('#pizzaMade').text(sizeInput + ' pizza with ' + totalToppings);
   });
 });
