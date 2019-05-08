
var start=prompt("Enter the value's starting range from which you want the random number.")
var end=prompt("Enter the value's ending range from which you want the random number.")
start=parseInt(start);
end=parseInt(end);

var randVal = Math.floor(Math.random()*(end-start+1))+(start);

var message=randVal + " is a random number between " + start + " and " +end + "."
document.write(message);