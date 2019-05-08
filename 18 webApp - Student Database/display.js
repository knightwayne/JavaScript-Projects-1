function disp(arr)
{

    var html="<ol>"
    for(var i=0;i<arr.length;i+=1)
    {
        html+="<li>HOUSE<ol>"
        for(var key in arr[i])
        {
            html+= "<li><strong>" + key + ": " + (arr[i][key]) + "</strong></li><br><br>";
        }
        html+="</ol></li><br><br>";
    }
    html+="</ol>"
    document.write(html);
}