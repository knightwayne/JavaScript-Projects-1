var student = [
    {
        id: "m1" , 
        name: "ironman" , 
        year: 2008 , 
        villain: "mandarin" ,
        house: "marvel"
    } ,

    {
        id: "m2" , 
        name: "captain america" , 
        year: 2014   , 
        villain: "redskull" ,
        house: "marvel"
    } , 

    {
        id: "d1" , 
        name: "batman" , 
        year: 2005 , 
        villain: "joker" ,
        house: "dc"
    } , 

    {
        id: "m3" , 
        name: "wolverine" , 
        year: 2013 , 
        villain: "sabretooth" ,
        house: "marvel"
    }
];

var input="initial";

while(input.toLowerCase()!=="quit")
{
    input = prompt("enter id - m1, m2, m3, d1, all or quit");
    input = input.toLowerCase();

    if(input==="quit")
    break;
    
    else if(input==="all")
    {
        for(var i=0;i<student.length;i++)
        {
            alert("New Character Coming Up!");

            for(var prop in student[i])
            {
                alert(prop + ": " + student[i][prop]);
            }
        }
    }
    else
    {
        var index;
        for(let i=0;i<student.length;i++)
        {
            if(student[i].id===input)
            {
                index=i;
                break;
            }
        }

        var property = prompt("name/year/villain/house/all");
        property = property.toLowerCase();

        if(property==="all")
        {
            for(let prop in student[index])
            {
                alert(prop + ": " + student[index][prop]);
            }
        }
        else
        {
            alert(input + "- " + property + ": " + student[index][property])
        }
    }
}

display();
