var eng = +prompt("Enter English No");
var urdu = +prompt("Enter Urdu No.");
var html = +prompt("Enter HTML No.");
var css = +prompt("Enter CSS No.");
var js = +prompt("Enter JS No.");
var totalMarks = 500;
var obtainedMarks = eng + urdu + html + css + js;
var percentage = obtainedMarks * 100/totalMarks;
alert("You obtained " + percentage + " %");