// 1. Generate a random number between 0 and 5
let randomNum = Math.floor(Math.random() * 6);

// 2. Ask the user a question
let question = prompt("Ask the Magic 8-Ball a question:");

// 3. Create 6 responses using switch
let answer;

switch (randomNum) {
  case 0:
    answer = "Yes, definitely!";
    break;
  case 1:
    answer = "No, not this time.";
    break;
  case 2:
    answer = "Maybe, try again later.";
    break;
  case 3:
    answer = "It looks good for you.";
    break;
  case 4:
    answer = "I wouldn’t count on it.";
    break;
  case 5:
    answer = "Ask again, I’m not sure.";
    break;
  default:
    answer = "Hmm... something went wrong.";
}

// 4 & 5. Output the original question + the random answer
console.log(`You asked: "${question}"`);
console.log(`Magic 8-Ball says: ${answer}`);
