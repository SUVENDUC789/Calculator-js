let a = Number.parseInt(prompt("Enter first number : "));
let b = Number.parseInt(prompt("Enter Second number : "));
let character = prompt("Enter choice [+,-,*,/,**] : ");

switch(character){
  case '+':
    var c=a+b;
    var res="Result is : "+c;
    alert(res);
    break;
    
  case '-':
    var c=a-b;
    var res="Result is : "+c;
    alert(res);
    break;
    
  case '*':
    var c=a*b;
    var res="Result is : "+c;
    alert(res);
    break;
    
  case '/':
    var c=a/b;
    var res="Result is : "+c;
    alert(res);
    break;
    
  case '**':
    var c=a**b;
    var res="Result is : "+c;
    alert(res);
    break;

  default:
    alert("Please choice correct character");
  
}