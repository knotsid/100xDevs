/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {

  // using map bcoz outpul looks like an array of map
  const categoryTotals = new Map();

  // simple iteration on each obj
  for (const transaction of transactions) {
    // de-structuring object into variables
    const { category, price } = transaction;

    // if category is not in map then adding it
    if (!categoryTotals.has(category)) {
      categoryTotals.set(category, 0);
    }

    // updating price of current transaction
    // categoryTotals.get(category) gets total amunt bcoz its a map
    categoryTotals.set(category, categoryTotals.get(category) + price)
  }

  const res = Array.from(categoryTotals, ([category, price]) => ({ category, totalSpent: price }));
  return res;
}

module.exports = calculateTotalSpentByCategory;
