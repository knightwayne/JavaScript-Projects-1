var student =[
    {
        name: "servus snape" , 
        house: "slytherin" , 
        color: 0 , 
        affiliations: ["dark_magic" , "draco" , "voldemort" , "dumbledore" ]
    } , 

    {
        name: "pomona sprout" , 
        house: "hufflepuff" , 
        color:  10 , 
        affiliations: ["plant" , "cedric" , "longbottom" , "dumbledore"]
    } , 

    {
        name: "filius flitwick" , 
        house: "ravenclaw" , 
        color: 7 , 
        affiliations: ["music" , "luna" , "potter" , "dumbledore"]
    } , 

    {
        name: "minerva mcgonagall" , 
        house: "gryffindor" , 
        color: 3 , 
        affiliations: ["hermoine" , "harry" , "ron" , "dumbledore"]
    } , 

    {
        name: "deathly hallows" , 
        house: "pervell" , 
        color: 100 , 
        affiliations: ["elder_wand" , "resurrection_stone" , "cloak_of_invisibility" , "dumbledore"]
    }
]

disp(student);

var userInput;
var param;

while(true)
{
    userInput = prompt("Enter the name of Harry Potter house - gryffindor, ravenclaw, hufflepuff, slytherin, pervell (easter Egg) or quit");
    userInput = userInput.toLowerCase();
    if(userInput==="quit")
    {
        break;
    }
    else
    {
        param = prompt("Enter the parameter(name, house, color, affiliation or all)");
        param = param.toLowerCase();
        var ind=0;
       for(var i=0;i<student.length;i+=1)
        {
           if(student[i].house===userInput) 
             {
                ind = i;
                break;
               }
        }
        if(param==="all")
        {
            for(var key in student[ind])
            {
                alert(key + ": " + student[ind][key]);
            }
        }
        else
        {
             alert(student[ind][param]);
        }
        
    }
}
