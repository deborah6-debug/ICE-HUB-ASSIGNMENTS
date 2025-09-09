// 1. Create an object named people with an empty array called friends
let people = {
  friends: []
};

// 2. Create three variables, each an object for a friend
let friend1 = {
  firstName: "Esther",
  lastName: "Akintola",
  id: 1
};

let friend2 = {
  firstName: "Deborah",
  lastName: "Victor",
  id: 2
};

let friend3 = {
  firstName: "Michael",
  lastName: "Ngonadi",
  id: 3
};

// 3. Add the three friends to the friends array
people.friends.push(friend1, friend2, friend3);

// 4. Output it to the console
console.log(people);
