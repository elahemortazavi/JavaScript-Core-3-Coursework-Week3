
// you have been provided with a takeout order. Write a program that will print out the receipt for this order.
// - Log each individual item to the console.
// - Log the total cost of the order to the console.


let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
//  first solution:
// Loop through each item in the order and log it to the console:
for (const item of order) {
  const { itemName, quantity, unitPrice } = item;
  console.log(`${itemName} - $${(quantity * unitPrice).toFixed(2)}`);
}

// Calculate the total cost of the order:
const total = order.reduce((acc, item) => {
  return acc + item.quantity * item.unitPrice;
}, 0);

// Log the total cost of the order to the console:
console.log(`Total: $${total.toFixed(2)}`);




// second solution:
let totalCost = 0;

console.log("Order Details:");
for (let i = 0; i < order.length; i++) {
  const itemTotal = order[i].quantity * order[i].unitPrice;
  console.log(
    `${order[i].itemName} x ${order[i].quantity} = $${itemTotal.toFixed(2)}`
  );
  totalCost += itemTotal;
}

console.log(`Total Cost: $${totalCost.toFixed(2)}`);




// third solution:
let totalCost = 0;

console.log("QTY\tITEM\t\t\tTOTAL");

for (let i = 0; i < order.length; i++) {
  const itemTotal = order[i].quantity * order[i].unitPrice;
  const formattedItemTotal = itemTotal.toFixed(2);
  console.log(
    `${order[i].quantity}\t${order[i].itemName}\t\t$${formattedItemTotal}`
  );
  totalCost += itemTotal;
}

const formattedTotalCost = totalCost.toFixed(2);
console.log(`\nTotal: ${formattedTotalCost}`);

// In this solution, we first log the table headers to the console, with each column separated by a tab character. We then use a for loop to iterate over the order array, calculate the total cost for each item, and log the item details to the console in the desired format, with each column separated by a tab character. Finally, we calculate the overall total cost of the order, format it to two decimal places, and log it to the console below the item list.