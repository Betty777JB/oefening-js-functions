
// fuction declaration
function twoNumbers1(number1, number2) {
return Math.pow(Math.pow(number1, 2) + Math.pow(number2, 2), 2);
}

// fuction declaration
//tweede manier
function twoNumbers(number1, number2) {
    return Math.pow(number1*number1 + number2*number2, 2);
}

// function expression
let  twoNumbers2 = function(number1, number2) {
return Math.pow(Math.pow(number1, 2) + Math.pow(number2, 2), 2);
};

// arrow function declaration
let twoNumbers3 = (number1, number2) => Math.pow(Math.pow(number1, 2) + Math.pow(number2, 2), 2);






console.log(twoNumbers1(2, 3));
console.log(twoNumbers(2, 3));
console.log(twoNumbers2(2, 3));
console.log(twoNumbers3(2, 3));
