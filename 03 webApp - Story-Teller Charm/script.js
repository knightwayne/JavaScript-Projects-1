
alert("Shall we play a game?")

//Once upon a time, there lived a adjective noun0, in a noun1. All he ever did was verb.
//He loved being adverb. He does remind me of noun3.

document.write("Story time peeps<br>")

var adjective=prompt("Give us an adjective");
var noun0=prompt("Give us a noun, the main character");
var story="Once upon a time, there lived a "+adjective+" "+noun0+", "

var noun1=prompt("Give us a place, a setting.");
story+="in a "+noun1+". ";

var verb=prompt("Give us a verb, an action");
story+="All s/he ever did was "+verb+". ";

var adverb=prompt("Give us an adverb, type of the action");
story+="He loved being "+adverb+". ";

var noun2=prompt("Give us a noun again, another character.");
story+="He is like a  "+noun2+". ";

var noun3=prompt("Give us a noun yet again, a famous person.");
story+="He does remind me of "+noun3+". ";

alert("Thank you user! ")
document.write(story);

