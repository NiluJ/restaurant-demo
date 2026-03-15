const categories = [
  "Appetizers",
  "Main",
  "Desserts",
  "Beverages"
];

const images = [
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  "https://images.unsplash.com/photo-1562967916-eb82221dfb36",
  "https://images.unsplash.com/photo-1600891964092-4316c288032e",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  "https://images.unsplash.com/photo-1550547660-d9450f859349",
  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601"
];

const foods = [
  "Paneer Tikka",
  "Chicken Wings",
  "Veg Burger",
  "Grilled Chicken",
  "Margherita Pizza",
  "Pasta Carbonara",
  "Chocolate Cake",
  "Ice Cream Sundae",
  "Cold Coffee",
  "Mango Shake"
];

const menu = [];

for (let i = 1; i <= 120; i++) {

  menu.push({

    id: i,

    name: foods[i % foods.length],

    price: Math.floor(Math.random() * 300) + 99,

    category: categories[i % categories.length],

    image: images[i % images.length]

  });

}

export default menu;