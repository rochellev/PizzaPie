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

Order.prototype.addToOrder = function (newPizza) {
    this.pizzaArray.push(newPizza);
    this.assignId;
}

Order.prototype.assignId = function () {
    this.id++
    return this.id;
}

// given and order, returns the total cost of order
Order.prototype.calculateTotal = function() {
    return this.pizzaArray.length*10;
//    this.pizzaArray.forEach(function(pie){

//    })
}

// ## Front-End Logic


// returns a Pizza object with the correct user requests
function getInputs(){
    var newPizza = new Pizza();
    newPizza.size = parseInt($("input:radio[name=size]:checked").val());
    newPizza.sauce = parseInt($("input:radio[name=sauce]:checked").val());

    $("input:checkbox[name=topping]:checked").each(function(){
         newPizza.toppingArray.push($(this).val());
         console.log(newPizza.toppingArray.length)
        
      });
      return newPizza;
    
}

function displayOrder(){
    $("#currentOrder").append("<div> Your total is " + myOrder.calculateTotal() + "</div>");

}


var myOrder = new Order();

$(document).ready(function () {
    $("#startOrder").click(function () {
        $("#startOrder").fadeOut();
        $("#formContainer").fadeIn();

    })
    $("#form").submit(function(event){
        event.preventDefault();
        var inputPizza = getInputs();
        myOrder.addToOrder(inputPizza);
        displayOrder();
       
        
        
    })
    // $("#finishOrder").click(function(){

    // })
})

