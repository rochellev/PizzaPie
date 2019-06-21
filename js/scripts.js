function Pizza(size, sauce, toppings) {
    this.size = size,
        this.sauce = sauce,
        this.toppingArray = Array(toppings)
}

Pizza.prototype.printPizza = function () {
    console.log("size = " + this.size + "\n" + "sauce = " + this.sauce + "\n" + "toppingArray = " + this.toppingArray + "\n");
}

// keep track of the pizzas
function Order() {
    this.id = 0;
    this.pizzaArray = []
    this.completeOrder = false;
}

Order.prototype.printOrder = function () {
    console.log("id = " + this.id + "\n" + "pizzaArray = " + this.pizzaArray + "\n" + "completeOrder = " + this.completeOrder + "\n");
}

Order.prototype.addOrder = function (newPizza) {
    this.pizzaArray.push(newPizza);
    this.assignId;
}

Order.prototype.assignId = function () {
    this.id++
    return this.id;
}

// ## Front-End Logic

$(document).ready(function () {
    $("#startOrder").click(function (event) {
        event.preventDefault();
        $("#startOrder").fadeOut();
        $("#formContainer").fadeIn();

    })
})

