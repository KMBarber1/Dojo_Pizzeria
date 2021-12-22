// Examples
var sandwich = {
    bread:    "sourdough",
    protein:  "london broil",
    cheese:   "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};
    
console.log(sandwich);

function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}
    
var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(s1);


// Practice

function pizzaOven(type) {
    var pizza = {}
    pizza.type = type
    return pizza
}
var p = pizzaOven("cheese only")
console.log(p)

function pizzaOven(style, sauce, protein, cheese) {
    var pizza = {};
    pizza.style = style
    pizza.sauce = sauce
    pizza.protein = protein;
    pizza.cheese = cheese;
    return pizza;
}
var p1 = pizzaOven("deep dish", "traditional", ["pepperoni", "sausage"], "mozzarella")
console.log(p1)

function pizzaOven(style, sauce, vegetables, cheese) {
    var pizza = {};
    pizza.style = style
    pizza.sauce = sauce
    pizza.vegetables = vegetables;
    pizza.cheese = cheese;
    return pizza;
}
var p2 = pizzaOven("hand tossed", "marinara", ["mushrooms", "olives", "onions"], ["mozzarella", "feta"])
console.log(p2)

function pizzaOven(style, sauce, vegetables, cheese, protein) {
    var pizza = {};
    pizza.style = style
    pizza.sauce = sauce
    pizza.vegetables = vegetables;
    pizza.cheese = cheese;
    pizza.protein = protein;
    return pizza;
}
var p3 = pizzaOven("hand tossed", "marinara", ["mushrooms", "olives", "green pepers"], "mozzarella", "sausage")
console.log(p3)

function pizzaOven(style, sauce, cheese, protein) {
    var pizza = {};
    pizza.style = style
    pizza.sauce = sauce
    pizza.cheese = cheese;
    pizza.protein = protein;
    return pizza;
}
var p4 = pizzaOven("thin and crispy", "marinara", "mozzarella", ["chicken", "bacon"])
console.log(p4)

// Bonus:

function randomPizza() {
    var pizza = [
        "Cheese",
        "Sausage",
        "Peperoni",
        "chicken and Bacon",
        "Hawaiian",
        "Spinich and Feta",
        "Buffalo Chicken",
        "Chicken BBQ",
        "Mushroom",
        "Green Peper and Olives",
        "Peperoni and Sausage",
];
    var chosenPizza = Math.random();
    chosenPizza *= pizza.length;
    chosenPizza = Math.floor(chosenPizza);
    return pizza[chosenPizza];
}
console.log(randomPizza()); 

// Or

var pizza = [
    "Cheese",
    "Sausage",
    "Peperoni",
    "chicken and Bacon",
    "Hawaiian",
    "Spinich and Feta",
    "Buffalo Chicken",
    "Chicken BBQ",
    "Mushroom",
    "Green Peper and Olives",
    "Peperoni and Sausage",
];

function randomPizza(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
console.log(randomPizza(pizza));