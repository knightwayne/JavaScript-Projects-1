var rand = Math.floor(Math.random()*2)+1;
var input = prompt("Guess a number");

if(rand === parseInt(input))
{
    alert("Congrats. Your guess is correct! "+rand);
}
else if(rand<parseInt(input))
{
    alert("Greater number guessed.");
    input=prompt("Guess Again");
    if(rand==parseInt(input))
    {
        alert("Congrats. Your guess is correct! "+rand);
    }
    else
    {
        alert("Sorry! Wrong Guess " + rand);
    }
}
else
{
    alert("Smaller number guessed.");
    input=prompt("Guess Again");
    if(rand==parseInt(input))
    {
        alert("Congrats. Your guess is correct! "+rand);
    }
    else
    {
        alert("Sorry! Wrong Guess " + rand);
    }
}

