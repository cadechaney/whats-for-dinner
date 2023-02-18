
// query Selectors
    // Radio Buttons
var sidesRadio = document.querySelector("#side")
var mainDishRadio = document.querySelector("#Main-Dish")
var dessertRadio = document.querySelector("#dessert")
    //Lets cook button
var letsCookButton = document.querySelector("button")





// Event Listeners
    // Radio Buttons
 sidesRadio.addEventListener(null, randomSide)
//  mainDishRadio.addEventListener("click")
    // Lets Cook Button
letsCookButton.addEventListener("click", displayFood)

//Food Item Arrays
sides = [
"Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies"]



function randomSide() {
    sides[getRandom(sides)];
}




//the display food button needs to be a conditional that calls one of 
// the other functions
function displayFood() {
 console.log(sides)
console.log(randomSide())
}

