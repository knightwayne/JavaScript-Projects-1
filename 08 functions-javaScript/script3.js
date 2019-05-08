
function randomRange(lower, upper)
{
    var value = Math.floor(Math.random()*(upper-lower))+lower;
    return value;
}

var lower = prompt("Lower Range");
if(isNaN(lower))
{
    lower = prompt("Enter Lower Range again.");
}
lower = parseInt(lower);

var upper = prompt("Upper Range");
if(isNaN(upper))
{
    
    upper = prompt("Enter Upper Range again.");
}
upper = parseInt(upper);

document.write(randomRange(lower,upper));