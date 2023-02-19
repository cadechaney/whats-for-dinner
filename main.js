

var letsCookButton = document.querySelector(".let-cook")
var clearButton = document.querySelector(".clear-button")
var cookPotImage = document.querySelector(".cookPot-img")
var secondBox = document.querySelector(".second-box")


letsCookButton.addEventListener("click", randomRecipe)
clearButton.addEventListener('click', clearRecipe)


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


    window.addEventListener("load", function(){
        console.log(clearButton)
        clearButton.classList.add("hidden") })



function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

// clearButton.style.display = 'none'

function randomRecipe() {
    console.log(clearButton)
    clearButton.classList.remove("hidden")
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
        <h2 class= "Dish-name"> ${sides[getRandomIndex(sides)]}!</h2>
    </article>
    `
 }  else if  (mealOption === 'Main Dishes') {
    secondBox.innerHTML = `
    <article class = "dish">
        <p class= "You-should-make"> You Should Make: </p>
        <h2 class= "Dish-name"> ${main[getRandomIndex(main)]}!</h2>
    </article>
    `
 }  else if  (mealOption === 'Desserts') {
    secondBox.innerHTML = `
    <article class = "dish">
        <p class= "You-should-make"> You Should Make: </p>
        <h2 class= "Dish-name"> ${dessert[getRandomIndex(dessert)]}!</h2>
    </article>
    `
 }  else if  (mealOption === 'entire meal') {
    secondBox.innerHTML = `
    <article class = "dish">
        <p class= "You-should-make"> You Should Make: </p>
        <h2 class= "Dish-name"> ${main[getRandomIndex(main)]} with a side of ${sides[getRandomIndex(sides)]} and ${dessert[getRandomIndex(dessert)]} for dessert!</h2>
    </article>
    `

    
}

}

function clearRecipe() {
    secondBox.innerHTML = `
    <img class="cookPot-img" src='assets/cookpot.svg' width="175" height="175">
    `
    clearButton.classList.add("hidden")
}


 
     




