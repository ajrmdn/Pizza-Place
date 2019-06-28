// Business Logic for PizzaPlace //

//--- This is the OBJECT ---//
const pizzaOrder = new Pizza();
//--- This is a CONSTRUCTOR ---//
function Pizza(size, topping1, topping2, topping3, topping4, topping5) {
//--- These are PROPERTIES ---//
  this.size = size,
  this.topping1 = topping1,
  this.topping2 = topping2,
  this.topping3 = topping3,
  this.topping4 = topping4,
  this.topping5 = topping5
}

//--- This is PROTOTYPE (algorithm C = B + A)--- pizzaPrice = method
Pizza.prototype.pizzaPrice = function(size, topping1, topping2, topping3, topping4, topping5) {
  const totalPrice = size + topping1 + topping2 + topping3 + topping4 + topping5
  return totalPrice
}

// User Interface Logic for Pizza Place //

$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
//--- These are USER INPUT ---//
    const sizeInput = parseInt($('#pieSize').val());
    const artichoke = parseInt($('input:checkbox[name=artichokes]:checked').val());
    const olive = parseInt($('input:checkbox[name=olives]:checked').val());
    const jalapeno = parseInt($('input:checkbox[name=jalapenos]:checked').val());
    const tomato = parseInt($('input:checkbox[name=tomatoes]:checked').val());
    const cheese = parseInt($('input:checkbox[name=cheese]:checked').val());
    console.log(sizeInput);
    console.log(artichoke);
    console.log(olive);
    console.log(jalapeno);
    console.log(tomato);
    console.log(cheese);
//--- Calls on the METHOD ---//
    const total = pizzaOrder.pizzaPrice(sizeInput, artichoke, olive, jalapeno, tomato, cheese);



    $('.output').show();
    $('#payment').text('$ ' + total + '.00');
   });
 });
