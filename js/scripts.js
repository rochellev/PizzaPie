function Pizza(size, sauce, toppings){
    this.size = size,
    this.sauce = sauce
    this.toppingArray = Array(toppings)
}

Pizza.prototype.printPizza = function(){
    console.log("size = "+ this.size + "\n" + "sauce = "+ this.sauce + "\n" + "toppingArray = "+ this.toppingArray + "\n");
}

// function Order(){

// }

