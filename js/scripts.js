// Business Logic for PizzaPlace //

function Pizza(size, topping1, topping2, topping3, topping4, topping5) {
//--- These are PROPERTIES ---//
  this.size = size,
  this.topping1 = topping1,
  this.topping2 = topping2,
  this.topping3 = topping3,
  this.topping4 = topping4,
  this.topping5 = topping5,
  this.price = 0

}

//--- This is PROTOTYPE (algorithm C = B + A)--- pizzaPrice = method
Pizza.prototype.pizzaPrice = function(size, topping1, topping2, topping3, topping4, topping5) {
  const totalPrice = size + topping1 + topping2 + topping3 + topping4 + topping5;
  this.price = totalPrice;
  console.log(this.price);

}

// User Interface Logic for Pizza Place //

$(document).ready(function() {
  $(".pizza").submit(function(event) {
    event.preventDefault();
//--- These are USER INPUT ---//
    const sizeInput = parseInt($('#pieSize').val());
    const artichoke   = $('#artichokes').is(':checked') ? 1 : 0;
    const olive     = $('#olives').is(':checked') ? 1 : 0;
    const jalepeno  = $('#jalepenos').is(':checked') ? 1 : 0;
    const tomato    = $('#tomatoes').is(':checked') ? 1 : 0;
    const cheese    = $('#cheese').is(':checked') ? 1 : 0;
    const pizzaOrder = new Pizza(sizeInput, artichoke, olive, jalepeno, tomato, cheese);

    // console.log('artichoke=' + artichoke);
    // console.log('olive=' + olive);
    // console.log('jalepeno=' + jalepeno);
    // console.log('tomato=' + tomato);
    // console.log('cheese=' + cheese);

//--- Calls on the METHOD ---//
    const total = pizzaOrder.pizzaPrice(sizeInput, artichoke, olive, jalepeno, tomato, cheese);

    $('.output').show();
    $('#payment').text('$ ' + pizzaOrder.price + '.00');
   });
 });
