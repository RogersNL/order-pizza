//Constructor
function Pizza (name, toppings, size) {
  this.customerName = name;
  this.toppings = toppings;
  this.size = size;
}
//Toppings
var pepperoni = {name: "pepperoni", price: 0.50};
var mushroom = {name: "mushroom", price: 0.75};
var onion = {name: "onion", price: 0.25};
var sausage = {name: "sausage", price: 1.00};
var bacon = {name: "bacon", price: 1.50};
var pineapple = {name: "pineapple", price: 0.60};
var olive = {name: "olive", price: .50};
var extraCheese = {name: "extraCheese", price: 1.00};

var toppingsArray = [pepperoni, mushroom, onion, sausage, bacon, pineapple, olive, extraCheese];
var selectedToppings = [];
//Sizes
var personal = {name: "personal", price: 5.00, diameter: 8}
var small = {name: "small", price: 6.00, diameter: 10};
var medium = {name: "medium", price: 7.00, diameter: 12};
var large = {name: "large", price: 9.00, diameter: 14};
var extraLarge = {name: "extraLarge", price: 11.00, diameter: 16};

var sizesArray = [personal, small, medium, large, extraLarge];

//Toppings total
function toppingsToArray (allToppings) {
  $("input:checkbox[name=toppings]:checked").each(function() {
    var topping = parseInt($(this).val());
    selectedToppings.push(allToppings[topping]);
  });
}
//Prototype Method for Cost
Pizza.prototype.cost  = function(){

  var toppingsTotal = 0;
  for (i = 0; i < this.toppings.length; i++) {
    toppingsTotal += this.toppings[i].price;
  }
  return (toppingsTotal + parseFloat(this.size.price)).toFixed(2);
}

//Form Submit
$(document).ready(function(){
  $("#pizza-order-form").submit(function(event){
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedSize = parseInt($("select#size").val());
    var pizzaSize = sizesArray[inputtedSize];
    selectedToppings = [];
    toppingsToArray(toppingsArray);
    var newPizza = new Pizza (inputtedName, selectedToppings, pizzaSize);
    console.log(newPizza);
    // alert("pizza costs " + newPizza.cost());

  });
});
