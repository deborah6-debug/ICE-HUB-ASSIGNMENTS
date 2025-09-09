// 1. Create a new myCar object
let myCar = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "White",
  mileage: 35000,
  isElectric: false
};

// 2. Create a variable holding the string "color"
let property = "color";

// Use the variable with bracket notation to update the color
myCar[property] = "Black";

// 3. Reuse the variable, assign it to "forSale"
// Then add a new property using bracket notation
property = "forSale";
myCar[property] = true; // true = available for sale

// 4. Output make and model
console.log("Make:", myCar.make);
console.log("Model:", myCar.model);

// 5. Output the value of forSale
console.log("For Sale:", myCar.forSale);
