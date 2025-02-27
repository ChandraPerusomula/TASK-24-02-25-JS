
/*
2.Sum of Numbers from 1 to 100
Scenario: Write JavaScript code that calculates the sum of numbers from 1 to 100.
Instructions:
Use a for loop to iterate from 1 to 100.
Add each number to a sum variable and print the tot

ANS:-

*/


let sum = 0; 
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("The sum of numbers from 1 to 100 is:", sum);

/*
3. Create a JavaScript program that calculates the
 factorial of a given number using a for loop.
Instructions:
Use a for loop to multiplication the given 
Take prompt from the user
hint: take count value as 1;
5*4*3*2*1=120
ANS:-
*/

let number = parseInt(prompt("Enter a number to calculate its factorial:"));

if (isNaN(number) || number < 0) {
  console.log("Please enter a non-negative integer.");
} else {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  console.log("The factorial of " + number + " is: " + factorial);
}


/*

4. Print Numbers in Reverse Order
Scenario: Write JavaScript code that prints numbers from 10 to 1 in reverse order.
Instructions:
Use a for loop to count down from 10 to 1.
Display the numbers in the console?
ANS:-
*/
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

/*
5. Print the Alphabet
Scenario: Write JavaScript code that prints the alphabet from A to Z.
Instructions:
Use a for loop to iterate through the ASCII values of the letters A to Z.
Convert the ASCII values to characters and print them.
Hint - console.log(String.fromCharCode(i));
ANS:-

*/

for (let i = 65; i <= 90; i++) {
  console.log(String.fromCharCode(i));
}