// document.getElementById("count-el").innerText = 5
/*let count = 0
console.log(count)*/

/*Challenge
let myAge = 20
console.log(myAge)*/

/* Basic Mathematical Operators
let firstBatch = 5
let secondBatch = 7
let count = firstBatch + secondBatch
console.log(count)*/

/*1. Create two variables, myAge and humanDogRatio
  2. Multiply the two together and store the result in myDogAge 
  3. Log myDogAge to the console
let myAge = 20
let humanDogRatio = 7
myDogAge = myAge * humanDogRatio
console.log("My Dog Age is " + myDogAge); */

// Reassigning and Incrementing
/*let count = 5
count+=2
count+=10
count-=2
console.log(count)*/


/*CHALLENGE
 Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
Decrease it down to 25, and then finally increase it to 70
let bonusPoints = 50
console.log(bonusPoints)
bonusPoints += 50
console.log(bonusPoints)
bonusPoints -= 75
console.log(bonusPoints)
bonusPoints += 45
console.log(bonusPoints) */

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

/*function increment() {
    console.log("The button was clicked")
}*/

/* Using function to write less code
// Setting up the the race 🏎 🏎 🏎

function countdown()
{
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)  
}

countdown()

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎
countdown()*/

/*Write My First Function
// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function
function displayNum()
{
    console.log(42);
}
displayNum()*/

/*Challenge
let lap1 = 34
let lap2 = 33
let lap3 = 36

Create a function that logs out the sum of all the lap times
function sumLap()
{
    let sum = lap1 + lap2 + lap3
    console.log(sum)
}
sumLap(); */

/* Challenge
let lapsCompleted = 0
// Create a function that increments the lapsCompleted variable with one
// Run it three times
function lapIncrement()
{
    lapsCompleted++;
}
lapIncrement()
lapIncrement()
lapIncrement()
console.log(lapsCompleted)*/

/*camelCase
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
    console.log(count)
}*/

/*Write your first string variable
let username = "per"
console.log(username)

// Create a variable, message, that stores the string: "You have tree new notifications"
let message = "You have tree new notifications"
console.log(message)*/
/* Create a variable, messageToUser, that contains the message we have logged
let username = "per"
let message = "You have tree new notifications"

let messageToUser = message + ", " + username + "!"

console.log(messageToUser)*/

/*Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console
let name = "Niño"
let greeting = "Hi, my name is "
let myGreeting = (greeting + name)
console.log(myGreeting)*/

/*Strings vs Numbers
console.log(4 + 5) // 
console.log("2" + "4")
console.log("5" + 1)
console.log(100 + "100")*/

/* Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

let name = "Per Harold Borgen "
let greeting = "Welcome Back "

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + name
// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEl.innerText += "👋"*/

/*let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    // Change this to use the plus equal technique you've learned
    count = += 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}*/

/*Create Save Feature
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countStr = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.innerText += countStr
    // NB: Make sure to not delete the existing content of the paragraph
    
}*/

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}