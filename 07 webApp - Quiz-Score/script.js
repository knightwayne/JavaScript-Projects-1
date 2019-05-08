var score = 0;
// Quiz Questions

//1
var value=prompt("9/3");
if(3===parseInt(value))
{
    score++;
    alert("Bravo!");
}
else
{
    alert("Oops!");
}

//2
var value=prompt("Alpha + bet");
if("alphabet"===(value).toLowerCase())
{
    score++;
    alert("Bravo!");
}
else
{
    alert("Oops!");
}

//3
var value=prompt("9+3");
if(12===parseInt(value))
{
    score++;
    alert("Bravo!");
}
else
{
    alert("Oops!");
}

//4
var value=prompt("7 in words");
if("seven"===(value).toLowerCase())
{
    score++;
    alert("Bravo!");
}
else
{
    alert("Oops!");
}

//5
var value=prompt("Question Number ??");
if(5===parseInt(value))
{
    score++;
    alert("Bravo!");
}
else
{
    alert("Oops!");
}

//ranking

if(score>=4)
{
    document.write("Genius<br>");
}
else if(1<score && score<4)
{
    document.write("Better luck next time<br>");
}
else
{
    document.write("Bruh WTF!<br>");
}

document.write("Your score is "+ score);