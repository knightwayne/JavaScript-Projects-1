//while loop n times, n is user input

function random()
{
    var rand=Math.floor(Math.random()*6)+1;
    return rand;
}


var i=0;
var n = prompt("No. of times the random number should be generated");
n=parseInt(n);

while(i<n)
{
    var ret = random();
    alert(i+1 + "th Random number " + ret);
    document.write(ret+" ");
    i++;
}