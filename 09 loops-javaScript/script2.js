//time or number of attempts taken to guess a random number

function random()
{
    var rand = Math.floor(Math.random()*1000)+1;
    return rand;
}

var guessedNumber = random();
alert("Number to be guessed " + guessedNumber);
var numberOfAttempts = 0;
var guess = 0;

while(guess!==guessedNumber)
{
    guess=random();
    numberOfAttempts++;
}

alert("No. of attempts = " + numberOfAttempts);
document.write("Number to be guessed " + guessedNumber + "<br>");
document.write("Number of guesses " + numberOfAttempts);
