// Ask the user for the two sides
let a = prompt("Enter the value of side a:");
let b = prompt("Enter the value of side b:");

// Convert the input strings to numbers
a = Number(a);
b = Number(b);

// Apply Pythagoras theorem: c² = a² + b²
let c = Math.sqrt((a * a) + (b * b));

// Output the result
console.log(`The hypotenuse of a triangle with sides ${a} and ${b} is: ${c}`);
