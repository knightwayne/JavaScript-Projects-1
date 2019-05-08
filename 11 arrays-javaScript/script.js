
function print(array)
{
    for(var i=0;i<array.length;i++)
    {
        alert(array[i]);
        document.write(i+1 + " element: " + array[i] + "<br>");
    }
}

var array = ['apple', 'banana', 'minion', 'kakuna hatata'];
print(array);

array.push(7,8,'+',9,'snape');
print(array);

array.unshift('after all', 'this time', '?' ,'always');
print(array);