function display()
{
    for(var i=0;i<student.length;i++)
    {
        document.write("<h2><strong>Character Number " + (i+1) + "</strong></h2><br>");

        for(var prop in student[i])
        {
            document.write("<strong>" + prop + ":</strong> " + student[i][prop] + "<br>");
        }
    }
}
