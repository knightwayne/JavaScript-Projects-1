var list=['pizza' , 'cheese' , 'penguin' , 'charlizard' ,
            'chicken' , 'egg' , 'dragons' , 'snape\'s always']
var search;

function print(message)
{
    document.write("<p>" + message + "</p>");
}

while(true)
{
    search = prompt("What do you wish to buy?(Enter \"quit\" to stop)")
    search=search.toLowerCase();
    if(search==="quit")
    {
        break;
    }
    else if(search==="list")
    {
        print(list.join(", "));
    }
    else if(list.indexOf(search)!==-1)
    {
        print("Yes, we have " + search);
    }
    else
    {
        print("Sorry, we don't have " + search);
    }
}