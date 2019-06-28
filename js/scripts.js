// Business Logic for PizzaPlace //

//--- This is the OBJECT ---//
const pizzaOrder = new Pizza();
//--- This is a CONSTRUCTOR ---//
function Pizza(size, topping1, topping2, topping3, topping4, topping5) {
//--- These are PROPERTIES ---//
  this.size = size,
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.topping4 = topping4;
  this.topping5 = topping5

}

//--- This is PROTOTYPE (algorithm C = B + A)--- pizzaPrice = method
Pizza.prototype.pizzaPrice = function(size, topping1, topping2, topping3, topping4, topping5) {
  const totalPrice = size + topping1 + topping2 + topping3 + topping4 + topping5
  return totalPrice
}

// User Interface Logic for Pizza Place //

$(document).ready(function() {
  $(".pizza").submit(function(event) {
    event.preventDefault();
//--- These are USER INPUT ---//
    const sizeInput = parseInt($('#pieSize').val());
    var artichoke   = $('#artichokes').is(':checked') ? 1 : 0;
    const olive     = $('#olives').is(':checked') ? 1 : 0;
    const jalapeno  = $('#jalapenos').is(':checked') ? 1 : 0;
    const tomato    = $('#tomatoes').is(':checked') ? 1 : 0;
    const cheese    = $('#cheese').is(':checked') ? 1 : 0;

    console.log('artichoke=' + artichoke);
    console.log('olive=' + olive);
    console.log('jalapeno=' + jalapeno);
    console.log('tomato=' + tomato);
    console.log('cheese=' + cheese);

//--- Calls on the METHOD ---//
    const total = pizzaOrder.pizzaPrice(sizeInput, artichoke, olive, jalapeno, tomato, cheese);



    $('.output').show();
    $('#payment').text('$ ' + total + '.00');
   });
 });
