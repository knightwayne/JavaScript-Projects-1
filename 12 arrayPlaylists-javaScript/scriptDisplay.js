function printList(array, array2)
{
    var html="";
    html+="<ol>"
    for(var i=0;i<array.length;i++)
    {
        html+="<li>" + array[i] + " - " + array2[i] + "</li>";
        html+="<br>";   
    }
    html+="</ol>";
    document.write(html);
}