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

//Sizes
var small = {name: "small", price: 5.00};
var medium = {name: "medium", price: 7.00};
var large = {name: "large", price: 9.00};
var extraLarge = {name: "extraLarge", price: 11.00};

//Prototype Method for Cost
Pizza.prototype.cost  = function(){

}
