
function sum ()
{

 let number1 = document.getElementById('number1').value;
 let number2 = document.getElementById('number2').value;

let converted1 = parseFloat(number1);
let converted2 = parseFloat(number2);

let summation = converted1+converted2;
let subtraction = converted1-converted2;
let multipulation = converted1*converted2;
let division = converted1/converted2;



 
document.getElementById('summation').innerHTML ="The summation is = " +summation;
document.getElementById('subtraction').innerHTML ="The subtraction is = " +subtraction;
document.getElementById('multipulation').innerHTML ="The multipulation is = " +multipulation;
document.getElementById('division').innerHTML ="The division is = " +division;

}