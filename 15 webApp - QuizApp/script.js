var arr = [
    ["Element with atomic number = 1 ?", "hydrogen" ] ,
    ["Force = ? * acceleration..." , "mass"] , 
    ["Integration of 1/ln(x) wrt x ?" , "x"] , 
    ["Programming language after snake species..." , "python"]
]

function print(message)
{
    var outputDiv = document.getElementById("block");
    outputDiv.innerHTML += message;
    //document.write(message);
}


//-------------------------------------------------------------------
var count = 0;
var answer;
var right="<ol> Questions answered correctly <br><br><br>";
var wrong="<ol> Questions answered incorrectly <br><br><br>";

for(var i = 0;i<arr.length;i+=1)
{
    answer = prompt(arr[i][0]);
    answer = answer.toLowerCase();
    if(answer===arr[i][1])
    {
        count++;
        right+="<li>" + arr[i][0] + " - " + arr[i][1] + "</li><br>";
    }
    else{
        wrong+="<li>" + arr[i][0] + " - " + arr[i][1] + "</li><br>";
    }
}

right+="</ol><br><br>";
wrong+="</ol><br><br>";

var numberString = "You have answered " + count + " question(s) correctly. <br><br>";
print(numberString);
print(right);
print(wrong);
