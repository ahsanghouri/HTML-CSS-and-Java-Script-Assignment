var math = +prompt("Enter Nos of Math");
var CSS = +prompt("Enter Nos of CSS");
var HTML = +prompt("Enter Nos of HTML");
var JS = +prompt("Enter Nos of JS");
var eng = +prompt("Enter Nos of Eng");
var total_marks = 500;
var obtainedMarks = math + CSS + HTML + JS + eng;
alert("Marks Obtained : "+obtainedMarks);
var totalPercentage = obtainedMarks * 100 / total_marks;
alert("Total Percentage : "+ totalPercentage);
switch(totalPercentage) {
    case totalPercentage >= "90" || totalPercentage <= "100" :
        alert("Grade A+");
        break;
        alert("Grade A");
        case totalPercentage >> "75" || totalPercentage << "89" :
        break;    
   case totalPercentage >> "60" && totalPercentage << "74" :
        alert("Grade B");
        break;
        case totalPercentage >> "45" & totalPercentage << "60" :
            alert("Grade C");
            break;
            default:
                alert("Fail");
                var name = prompt ("Enter your name");
                switch(name){
                    case "ahsan":
                        alert("your name is ahsan");
                        break;
                    default: ("Wrong No.");
                }
                
        
}