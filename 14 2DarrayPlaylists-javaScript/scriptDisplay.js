
function display(array)
{
    var html = "<ol>";
    html+="Song     - Artist     - Genre<br>";
    html+="<br>"
    for(var i=0;i<array.length;i++)
    {
        html+="<li>" + array[i][0] + " - " + array[i][1] + " - " + array[i][2] + "</li>";
        html+="<br>";
    }

    html+="</ol>";
    document.write(html);
}