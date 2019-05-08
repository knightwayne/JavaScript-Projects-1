function randColor()
{
    return Math.round(Math.random()*256);
}
function rgbGen()
{
    var rgbVal = "rgb(";
    rgbVal+=randColor() + "," + randColor() + "," + randColor();
    rgbVal+=")";
    //alert(rgbVal);
    return rgbVal;
}

var elem = " ";
var cntr = 0

while (cntr<50){
    var rgbelem = rgbGen();
    elem+= "<div style='background-color:" + rgbelem + "'>" + rgbelem+ "</div>"
    cntr++;
}

document.write(elem);