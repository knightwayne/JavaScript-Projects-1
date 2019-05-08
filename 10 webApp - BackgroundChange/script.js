
function val()
{
    var random = Math.floor(Math.random()*256);
    return random;
}

function rgbValue()
{
    var rgb = 'rgb(' + val() + ',' + val() + ',' + val() + ')';
    return rgb;
}

var rgb;
var html='';

/*for(var i=0;i<10;i++)
{
    red=val();
    blue=val();
    green=val();
    rgb='rgb(' + red + ',' + green + ',' + blue + ')';
    
    html='<div style=" background-color: '  + rgb + ';">' + rgb + '</div>';
    document.write(html);

}*/

for(var i=0;i<100;i++)
{
    rgb=rgbValue();
    html+='<div style=" border-radius: 10px; background-color: '  + rgb + ';">' + rgb + '</div>';
}
document.write(html);
