
function randomizer( arg )
{
    var ret = Math.floor(Math.random()*arg)+1;
    alert(ret);
    return ret;
}

function repeat5()
{
    var value = prompt("Upper limit");
    var val = randomizer(parseInt(value));
    console.log(val);   
}

repeat5();
repeat5();
repeat5();
repeat5();
repeat5();