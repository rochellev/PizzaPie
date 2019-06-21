var mytops = ["pepperoni", "mushroon"];
var myPizza = new Pizza(2, 2, mytops)
myPizza.printPizza();

var myOrder = new Order();
myOrder.addOrder(myPizza);
var theType = typeof myOrder.pizzaArray[0];
console.log("type of thing in pizza array " + theType);
myOrder.printOrder();
myOrder.addOrder(new Pizza(1,2, ["pepperoni", "ham"]));
myOrder.printOrder();
