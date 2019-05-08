var arr = [
    {
        question : "Element with atomic number = 1 ?" , 
        answer : "hydrogen"
    } , 
    {
        question : "Force = ? * acceleration..." , 
        answer : "mass"
    } , 
    {
        question : "Integration of 1/ln(x) wrt x ?" , 
        answer : "x"
    } , 
    {
        question : "Programming language after snake species..." , 
        answer : "python"
    }
]

function print(message)
{
    /*
    var outputDiv = document.getElementById("block");
    outputDiv.innerHTML += message;*/
    document.write(message);
}


//-------------------------------------------------------------------
var count = 0;
var answer;
var right="<ol> Questions answered correctly <br><br><br>";
var wrong="<ol> Questions answered incorrectly <br><br><br>";

for(var i =0;i<arr.length;i+=1)
{
    answer = prompt(arr[i]['question']);    //arr[i].question can be used or not ?? - 
    answer = answer.toLowerCase();          //i think it can be used - check later.
    if(answer===arr[i].answer)
    {
        count++;
        right+="<li>" + arr[i].question + " - " + arr[i].answer + "</li><br>";
    }
    else{
        wrong+="<li>" + arr[i].question + " - " + arr[i].answer + "</li><br>";
    }
}

right+="</ol><br><br>";
wrong+="</ol><br><br>";

var numberString = "You have answered " + count + " question(s) correctly. <br><br>";
print(numberString);
print(right);
print(wrong);
