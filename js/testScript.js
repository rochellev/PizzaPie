var mytops = ["pepperoni", "mushroon"];
var myPizza = new Pizza(2, 2, mytops)
myPizza.printPizza();

var myOrder = new Order();
myOrder.addToOrder(myPizza);
var theType = typeof myOrder.pizzaArray[0];
console.log("type of thing in pizza array " + theType);
myOrder.printOrder();
myOrder.addToOrder(new Pizza(1,2, ["pepperoni", "ham"]));
myOrder.printOrder();
