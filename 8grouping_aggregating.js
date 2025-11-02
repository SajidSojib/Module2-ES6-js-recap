//* Grouping and Aggregating

//? You have a flat array of sales data. you need to groud them by category
//? and then calculate the total sales and number of items sold for each category.

const salesData = [
    { category: "Electronics", quantity: 10, price: 100 },
    { category: "Books", quantity: 5, price: 20 },
    { category: "Home", quantity: 3, price: 50 },
    { category: "Electronics", quantity: 8, price: 80 },
    { category: "Books", quantity: 2, price: 15 },
    { category: "Home", quantity: 4, price: 40 },
    { category: "Electronics", quantity: 6, price: 60 },
    { category: "Books", quantity: 1, price: 10 },
]

const groupedSales = salesData.reduce((table, sale)=>{
    const { category, quantity, price } = sale;

    if (!table[category]) {
      table[category] = {
        sales: 0,
        quantity: 0,
      };
    }
    table[category].sales += quantity * price;
    table[category].quantity += quantity;
        
    return table;
},{})
console.log(groupedSales);