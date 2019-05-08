
var student1 = {
    name : "Severus Snape" , 
    house : "Slytherin" , 
    number : 6 ,
    skills : ["voldemort" , "dumbledore" , "lily" , "draco"]
}

function print(message)
{
    var propertyID = document.getElementById("property");
    propertyID.innerHTML+=message;
}

alert(student1.name);
alert(student1['house']);
var message = "<br><br><h1><strong>Harry Potter! I am " + student1.name + ". ";
message+= "I am the head of the " + student1.house + ". ";
message+="Open book number " + student1.number + " of the HP series. ";
message+="My interests include, but are not limited to, "
/*for(var i=0;i<student1.skills.length;i++)
{
    message+=student1.skills[i]+", ";
}*/
message+=student1.skills.join("... ")
message+=" and of course you, Mr.Potter. </strong></h1>"
print(message);

for(var key in student1)
{
    document.write(key + ": " + student1[key]);
    document.write("<br>");
}