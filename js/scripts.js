function Pizza(size, sauce) {
    this.size = size,
        this.sauce = sauce,
        this.toppingArray = []
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

function calculateTotal(order){
    return 10;
}

function getInputs(){
    debugger;
    var newPizza = new Pizza();
    newPizza.size = parseInt($("input:radio[name=size]:checked").val());
    newPizza.sauce = parseInt($("input:radio[name=sauce]:checked").val());

    $("input:checkbox[name=topping]:checked").each(function(){
         newPizza.toppingArray.push($(this).val());
         console.log(newPizza.toppingArray.length)
        
      });
      return newPizza;
    
}

// ## Front-End Logic
var myOrder = new Order();

$(document).ready(function () {
    $("#startOrder").click(function (event) {
        $("#startOrder").fadeOut();
        $("#formContainer").fadeIn();

    })
    $("#form").submit(function(event){
        event.preventDefault();
        var inputPizza = getInputs();
        inputPizza.printPizza();
        
    })
})

