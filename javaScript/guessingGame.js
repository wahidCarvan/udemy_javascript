// somple guessing game
// make a secret number
var secretNumber = 4;
// ask user for guess
var stringGuess = prompt ('guess a number');
// turns user input in to  number
var guess = Number(stringGuess);
// check to see if user guess is correct
//Number makes users input into a number
if(guess=== secretNumber){
  alert('your guess is correct');
}
else if (guess< secretNumber){
 alert('your guess is too high!');
} else (guess>secretNumber) 
  alert('your guess is to low, guess again.');

