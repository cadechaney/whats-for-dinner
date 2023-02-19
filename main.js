
// query Selectors
    // Radio Buttons

    //Lets cook button
var letsCookButton = document.querySelector(".let-cook")
var clearButton = document.querySelector(".clear-button")
var cookPotImage = document.querySelector(".cookPot-img")
var secondBox = document.querySelector(".second-box")






// Event Listeners
    // Radio Buttons
//  sidesRadio.addEventListener(null, randomSide)
//  mainDishRadio.addEventListener("click")
    // Lets Cook Button
letsCookButton.addEventListener("click", randomRecipe)
clearButton.addEventListener('click', clearRecipe)

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

main = [
    "Spaghetti and Meatballs",
    "Pineapple Chicken",
    "Shakshuka",
    "Thai Yellow Curry",
    "Bibimbap",
    "Chicken Parmesean",
    "Butternut Squash Soup",
    "BBQ Chicken Burgers",
    "Ramen",
    "Empanadas",
    "Chicken Fried Rice",
    "Sheet Pan Fajitas",
    "Margarita Pizza"]

dessert = [ "Apple Pie",
    "Lemon Meringue Pie",
    "Black Forest Cake",
    "Banana Bread",
    "Peach Cobbler",
    "Cheesecake",
    "Funfetti Cake",
    "Baklava",
    "Flan",
    "Macarons",
    "Macaroons",
    "Chocolate Cupcakes",
    "Pavlova",
    "Pumpkin Pie",
    "Key Lime Pie",
    "Tart Tatin",
    "Croissants",
    "Eclairs"]


// getelementbyname


function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }


  // use for and if else statements to get the random 
//   var radioOptions = document.getElementsByName("radio");

function randomRecipe() {
    clearButton.classList.remove("view")
    var radioOptions = document.getElementsByName("radio");
    for (var i = 0; i < radioOptions.length; i++) {
        if (radioOptions[i].checked) {
            radioOptions[i].checked = false
            console.log("OHHHH YEAH")
            var mealOption = (radioOptions[i].value)
        }
    }
 if (mealOption === 'Sides') {
    secondBox.innerHTML = `
    <article class = "dish">
        <p class= "You-should-make"> You Should Make: </p>
        <p class= "Dish-name"> ${sides[getRandomIndex(sides)]}!</p>
    </article>
    `
 }  else if  (mealOption === 'Main Dishes') {
    secondBox.innerHTML = `
    <article class = "dish">
        <p class= "You-should-make"> You Should Make: </p>
        <p class= "Dish-name"> ${main[getRandomIndex(main)]}!</p>
    </article>
    `
 }  else if  (mealOption === 'Desserts') {
    secondBox.innerHTML = `
    <article class = "dish">
        <p class= "You-should-make"> You Should Make: </p>
        <p class= "Dish-name"> ${dessert[getRandomIndex(dessert)]}!</p>
    </article>
    `
 }  else if  (mealOption === 'entire meal') {
    secondBox.innerHTML = `
    <article class = "dish">
        <p class= "You-should-make"> You Should Make: </p>
        <p class= "Dish-name"> ${main[getRandomIndex(main)]} with a side of ${sides[getRandomIndex(sides)]} and ${dessert[getRandomIndex(dessert)]} for dessert!</p>
    </article>
    `


}
}

function clearRecipe() {
    clearButton.classList.add("hidden");
    secondBox.innerHTML = `
    <img class="cookPot-img" src='assets/cookpot.svg' width="175" height="175">
    `

}

 
     


//the display food button needs to be a conditional that calls one of 
// the other functions
// function displayFood() {
// //  console.log(sides)
// // console.log(sides[getRandomIndex(sides)])
// console.log(randomRecipe())

