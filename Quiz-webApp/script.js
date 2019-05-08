
function askQuestion(question)
{
    var input = prompt(question);
    return input;
}

var score=0;

if(12===parseInt(askQuestion("9+3?")))
{
    score++;
    alert("Bingo!");
}
else
{
    alert("oops!");
}

if("honesty"===askQuestion("--- is the best policy?").toLowerCase())
{
    score++;
    alert("Bingo!");
}
else
{
    alert("oops!");
}

if(3===parseInt(askQuestion("9/3?")))
{
    score++;
    alert("Bingo!");
}
else
{
    alert("oops!");
}

if("four"===askQuestion("question number?").toLowerCase())
{
    score++;
    alert("Bingo!")
}
else
{
    alert("oops!");
}

document.write("Your score is " + score + ".<br>");

if(score>=3)
{
    document.write("Playaaa");
}
else if(score>=1)
{
    document.write("Needs work!!");
}
else
{
    document.write("Noooooooob");
}