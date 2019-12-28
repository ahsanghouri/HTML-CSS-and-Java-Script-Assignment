var num = prompt ("Enter a number");
var num2 = prompt ("Enter 2nd No.");
var operator =  +prompt("Enter any operator");
switch(operator) {
    case '+':
        alert(num + num2);
        break;
    case '-':
        alert(num - num2);
        break;
    case '*' :
        alert(num * num2);
        break;
    case '/' :
        alert(num / num2);
        break;
    case '%':
        alert(num % num2);
        break;
    default :
    alert("Not a Valid Operator");
}