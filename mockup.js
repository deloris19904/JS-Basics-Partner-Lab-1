let number1 = prompt (" pick a number")
let number2 = prompt (" pick a second number")
let result = number1/number2
alert (result) 
let number = prompt ("enter a number")
if ((number%3)===0 && (number%5)===0)
{ alert("FizzBuzz")}
else if((number%3)===0){
alert("Fizz")
}else if ((number%5)===0){
alert("Buzz")
}

let numberRange = 6
let userGuess = prompt("Pick a number between 1 and 10")
if (userGuess === numberRange) {
    alert("That is correct!")
} else {
    alert("Sorry, try another number.")
}


Generate a number between 1-10. 
Ask the user to guess the number and display if the user guessed correctly or not.