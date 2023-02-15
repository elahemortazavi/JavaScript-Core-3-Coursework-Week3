let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

// Loop through each item in the order and log it to the console
for (const item of order) {
  const { itemName, quantity, unitPrice } = item;
  console.log(`${itemName} - $${(quantity * unitPrice).toFixed(2)}`);
}

// Calculate the total cost of the order
const total = order.reduce((acc, item) => {
  return acc + item.quantity * item.unitPrice;
}, 0);

// Log the total cost of the order to the console
console.log(`Total: $${total.toFixed(2)}`);