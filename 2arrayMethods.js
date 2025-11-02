const apiData = [
  {
    id: 1,
    productName: "Wireless Mouse",
    price: 25.99,
    category: "Electronics",
    rating: 4.5,
    stock: 120,
  },
  {
    id: 2,
    productName: "Bluetooth Headphones",
    price: 59.99,
    category: "Electronics",
    rating: 4.7,
    stock: 80,
  },
  {
    id: 3,
    productName: "Mechanical Keyboard",
    price: 89.99,
    category: "Electronics",
    rating: 4.6,
    stock: 45,
  },
  {
    id: 4,
    productName: "Smartwatch",
    price: 129.99,
    category: "Electronics",
    rating: 4.3,
    stock: 70,
  },
  {
    id: 5,
    productName: "USB-C Charger",
    price: 19.99,
    category: "Accessories",
    rating: 4.4,
    stock: 150,
  },
  {
    id: 6,
    productName: "Laptop Stand",
    price: 34.99,
    category: "Office",
    rating: 4.2,
    stock: 90,
  },
  {
    id: 7,
    productName: "Desk Lamp",
    price: 29.99,
    category: "Office",
    rating: 4.3,
    stock: 110,
  },
  {
    id: 8,
    productName: "Smart LED Bulb",
    price: 14.99,
    category: "Home",
    rating: 4.1,
    stock: 200,
  },
  {
    id: 9,
    productName: "Wireless Speaker",
    price: 79.99,
    category: "Electronics",
    rating: 4.4,
    stock: 60,
  },
  {
    id: 10,
    productName: "Fitness Tracker",
    price: 49.99,
    category: "Accessories",
    rating: 4.0,
    stock: 85,
  },
  {
    id: 11,
    productName: "4K Monitor",
    price: 329.99,
    category: "Electronics",
    rating: 4.7,
    stock: 15,
  },
  {
    id: 12,
    productName: "Office Chair",
    price: 199.99,
    category: "Office",
    rating: 4.5,
    stock: 22,
  },
  {
    id: 13,
    productName: "Noise Cancelling Earbuds",
    price: 99.99,
    category: "Accessories",
    rating: 4.5,
    stock: 55,
  },
  {
    id: 14,
    productName: "External Hard Drive 1TB",
    price: 89.99,
    category: "Electronics",
    rating: 4.6,
    stock: 40,
  },
  {
    id: 15,
    productName: "Coffee Maker",
    price: 69.99,
    category: "Home",
    rating: 4.2,
    stock: 75,
  },
  {
    id: 16,
    productName: "Table Organizer",
    price: 24.99,
    category: "Office",
    rating: 4.1,
    stock: 130,
  },
  {
    id: 17,
    productName: "Smart Plug",
    price: 22.99,
    category: "Home",
    rating: 4.3,
    stock: 95,
  },
  {
    id: 18,
    productName: "Power Bank 20000mAh",
    price: 49.99,
    category: "Accessories",
    rating: 4.6,
    stock: 60,
  },
  {
    id: 19,
    productName: "Electric Kettle",
    price: 39.99,
    category: "Home",
    rating: 4.2,
    stock: 75,
  },
  {
    id: 20,
    productName: "Cable Organizer",
    price: 12.99,
    category: "Accessories",
    rating: 4.1,
    stock: 140,
  },
];

//? find top 3 electroic devices and return as [{name:name1}, ...]

//TODO filter => Electronics
//TODO sort => rating
//TODO slice => top 3
//TODO map => {name:name1, rating:rating1}

const top3Electronics = apiData
  .filter((item) => item.category === "Electronics")
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3)
  .map((item) => {
    return { name: item.productName, rating: item.rating };
  });
console.log(top3Electronics);