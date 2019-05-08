var secondsInMinute=60
var minutesInHour=60
var hoursInDay=24
var daysInYear=365

var secondsInDay = secondsInMinute*minutesInHour*hoursInDay
document.write("There are " + secondsInDay + " seconds in a day.")

var age = prompt("Your age?")
var ageInSeconds=secondsInDay*daysInYear*age

document.write("<br>There are " + ageInSeconds + " seconds in your age.");