/* LESSON 3 - Programming Tasks */
function add (number1, number2) {
 // In the function, return the sum of the parameters number1 and number2
 return number1 + number2;}

/* FUNCTIONS */
/* Function Definition - Add Numbers */
// Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of add1 and add2. Pass them to the add function
let addNumbers = function () {
  let addNumber1 = Number(document.querySelector("#add1").value);
  let addNumber2 = Number(document.querySelector("#add2").value);

  // In the addNumbers function, call the add function using those two arguments and assign the return value to an HTML form element with an ID of sum
  document.querySelector("#sum").value = add(addNumber1, addNumber2);
};

// Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function. (Why is this line of code is NOT located inside a function?)
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
//Using function expressions, repeat the items in Step 2 with new functions named subtract and subtractNumbers and HTML form controls with IDs of subtract1, subtract2, subtractNumbers, and difference. Verify that these are the form control ID values.
let subtract = function (number1, number2) {
  return number1 - number2;
};

let subtractNumbers = function () {
  let subtract1 = Number(document.querySelector("#subtract1").value);
  let subtract2 = Number(document.querySelector("#subtract2").value);

  document.querySelector("#difference").value = subtract(subtract1, subtract2);
};

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
//Using arrow functions, repeat the items in Step 2 with arrow functions named multiply and multiplyNumbers and HTML form controls with IDs of factor1, factor2, multiplyNumbers, and product.
let multiply = (number1, number2) => {
  return number1 * number2;
};

let multiplyNumbers = () => {
  let factor1 = Number(document.querySelector("#factor1").value);
  let factor2 = Number(document.querySelector("#factor2").value);

  document.querySelector("#product").value = multiply(factor1, factor2);
};

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
// Using Function Declaration
function divide(number1, number2) {
  return number1 / number2;
}

// Using Arrow Function
const divideNumbers = () => {
  // Function Declaration
  let dividend = Number(document.querySelector("#dividend").value);
  let divisor = Number(document.querySelector("#divisor").value);

  // Using Arrow Function
  document.querySelector("#quotient").value = divide(dividend, divisor);
};

// Using Function Declaration
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
// Event Listener for Divide Numbers Button
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

// Event Listener for Get Total Due Button
document.getElementById('getTotal').addEventListener('click', function() {
  // Get the subtotal value entered by the user
  const subtotal = parseFloat(document.getElementById('subtotal').value);
  
  // Check if the membership checkbox is checked
  const isMember = document.getElementById('member').checked;
  
  // Apply discount if the user is a member
  const discount = isMember ? 0.2 : 0; // 20% discount if the user is a member
  
  // Calculate total due
  const total = subtotal - (subtotal * discount);
  
  // Update the total span with the calculated total
  document.getElementById('total').textContent = `$ ${total.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
// Declare and instantiate an array variable to hold the numbers 1 through 13
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array */
// Assigning the value of the array variable to the HTML element with an ID of 'array'
document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */
// Use the filter() array method to find all odd numbers and assign the result to the HTML element with an ID of 'odds'
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
// Use the filter() array method to find all even numbers and assign the result to the HTML element with an ID of 'evens'
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
// Use the reduce() array method to sum the array elements and assign the result to the HTML element with an ID of 'sumOfArray'
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
// Use the map() array method to multiply each element by 2 and assign the result to the HTML element with an ID of 'multiplied'
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
// Use the map() and reduce() array methods to sum the array elements after multiplying each element by two. Assign the result to the HTML element with an ID of 'sumOfMultiplied'
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
