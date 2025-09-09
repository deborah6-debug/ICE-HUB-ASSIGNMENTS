// 1. Create a prompt to ask the user's age
let age = prompt("Enter your age:");

// 2. Convert the response to a number
age = Number(age);

// 3. Declare a message variable
let message;

// 4, 5, 6. Apply the conditions
if (age >= 21) {
  message = "✅ You may enter the venue and purchase alcohol.";
} else if (age >= 19) {
  message = "✅ You may enter the venue, but ❌ cannot purchase alcohol.";
} else {
  message = "⛔ Sorry, you cannot enter the venue.";
}

// 7. Output the response message
console.log(message);
