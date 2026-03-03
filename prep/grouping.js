// Bad way
const price0 = 4.6;
const price1 = 5.03;
const price2 = 7.99;
const price3 = 8.01;

// Good way
const prices = [4.6, 5.03, 7.99, 8.01];

let total = 0;

for (const price of prices) {
  total += price;
}

console.log("Total:", total);