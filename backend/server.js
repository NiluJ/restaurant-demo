const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const menu = [
  { id: 1, name: "Margherita Pizza", price: 299 },
  { id: 2, name: "Veg Burger", price: 199 },
  { id: 3, name: "Pasta Carbonara", price: 249 }
];

app.get("/api/menu", (req, res) => {
  res.json(menu);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});