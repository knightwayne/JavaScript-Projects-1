// user guessed computer generated random number

function random()
{
    var rand=Math.floor(Math.random()*10)+1;
    return rand;
}

var guessNumber = random();
var userGuess;
var attempts = 0;

do
{
    userGuess = prompt("Not the correct guess. Guess the number!");
    attempts++;
}while(parseInt(userGuess)!==guessNumber)

alert("The random number was " + userGuess);
alert("Number of attempts " + attempts);
