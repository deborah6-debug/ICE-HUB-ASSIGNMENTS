// 1. Ask the user to pick a number between 0 and 10
let prize = prompt("Pick a number between 0 and 10:");

// 2. Convert the response to a number
prize = Number(prize);

// 3. Create a variable for the output message
let outputMessage = "My Selection: " + prize + " → ";

// 4. Use switch to assign prizes
let prizeMessage;

switch (prize) {
  case 0:
    prizeMessage = "Oops! No prize this time 😢";
    break;
  case 1:
  case 2:
    prizeMessage = "🎟️ You win a free movie ticket!";
    break;
  case 3:
  case 4:
    prizeMessage = "🍫 You win a chocolate bar!";
    break;
  case 5:
  case 6:
  case 7:
    prizeMessage = "🎧 You win a pair of headphones!";
    break;
  case 8:
  case 9:
    prizeMessage = "📱 You win a smartphone!";
    break;
  case 10:
    prizeMessage = "🚗 Jackpot! You win a brand new car!";
    break;
  default:
    prizeMessage = "⚠️ Invalid selection. Please enter a number 0–10.";
}

// 6. Output the final message
console.log(outputMessage + prizeMessage);
aheader