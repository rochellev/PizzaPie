function Pizza(size, sauce) {
    this.size = size,
    this.sauce = sauce,
    this.toppingArray = []
    this.price = 0;
}

Pizza.prototype.printPizza = function () {
    console.log("size = " + this.size + "\n" + "sauce = " + this.sauce + "\n" + "toppingArray = " + this.toppingArray + "\n");
}

Pizza.prototype.setPrice = function(){
       if(this.size == "Large"){
        this.price = 9;
       }else if(this.size == "Medium") {
           this.price = 6;
       }else{
           this.price = 3;
       }
     
      
}

// keep track of the pizzas
function Order() {
    this.pizzaArray = [],
    this.completeOrder = false,
    this.total = 0
}

Order.prototype.printOrder = function () {
    console.log("id = " + this.id + "\n" + "pizzaArray = " + this.pizzaArray + "\n" + "completeOrder = " + this.completeOrder + "\n");
}

Order.prototype.addToOrder = function (newPizza) {
    this.pizzaArray.push(newPizza);
  
}



// given and order, returns the total cost of order
Order.prototype.setTotal = function() {
    this.total+= this.pizzaArray[this.pizzaArray.length - 1].price ;
}

// ## Front-End Logic


// returns a Pizza object with the correct user requests
function getInputs(){
    var newPizza = new Pizza();
    newPizza.size = $("input:radio[name=size]:checked").val();
    newPizza.sauce = $("input:radio[name=sauce]:checked").val();

    $("input:checkbox[name=topping]:checked").each(function(){
         newPizza.toppingArray.push($(this).val());
      });
      newPizza.setPrice();

      return newPizza;
    
}

function displayNewOrder(givenOrder){
    givenOrder.pizzaArray.forEach(function(pie){

        $("#currentOrder").append("<div> " + pie.size + " " + pie.sauce + " Sauce with the following toppings: " + pie.toppingArray.join(", ")+ "<br>" + "Cost: $"+ pie.price + "</div>" + "<br><br>");


        
    })
    // $("#runningtotal").show("<div> Running Total For Your Order: $" + givenOrder.total + "</div>" )

   

}



var DisplayArray = [];
var total = 0;

$(document).ready(function () {
    $("#startOrder").click(function () {
        $("#startOrder").fadeOut();
        $("#formContainer").fadeIn();

    })
    $("#form").submit(function(event){
        event.preventDefault();
        var myOrder = new Order();
        myOrder.addToOrder(getInputs());
    
        myOrder.setTotal();
        total+= myOrder.total;
        
        DisplayArray.push(myOrder);
    
        displayNewOrder(myOrder);
        
    })
    $("#finishOrder").click(function(){
        $("#totalOut").append("<div> Your Total is: $" + total + "</div>")

    })
})

