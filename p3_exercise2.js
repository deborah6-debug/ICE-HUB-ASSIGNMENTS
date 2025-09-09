// 1. Create an empty array
let shoppingList = [];

// 2. Add Milk, Bread, and Apples
shoppingList.push("Milk", "Bread", "Apples");

// 3. Update "Bread" with "Bananas" and "Eggs"
shoppingList.splice(1, 1, "Bananas", "Eggs"); 
// removes 1 item at index 1 ("Bread") and adds "Bananas", "Eggs"

// 4. Remove the last item and output it
let lastItem = shoppingList.pop();
console.log("Removed last item:", lastItem);

// 5. Sort the list alphabetically
shoppingList.sort();
console.log("Sorted list:", shoppingList);

// 6. Find and output the index of "Milk"
let milkIndex = shoppingList.indexOf("Milk");
console.log("Index of Milk:", milkIndex);

// 7. After "Bananas", add "Carrots" and "Lettuce"
let bananasIndex = shoppingList.indexOf("Bananas");
shoppingList.splice(bananasIndex + 1, 0, "Carrots", "Lettuce");
console.log("List after adding Carrots and Lettuce:", shoppingList);

// 8. Create a new list containing Juice and Pop
let newList = ["Juice", "Pop"];

// 9. Combine both lists, adding the new list twice
let combinedList = shoppingList.concat(newList, newList);
console.log("Combined list:", combinedList);

// 10. Get the last index value of "Pop"
let lastPopIndex = combinedList.lastIndexOf("Pop");
console.log("Last index of Pop:", lastPopIndex);
