const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

const menu = [
  { id: 1, name: "Margherita Pizza", price: 299 },
  { id: 2, name: "Veg Burger", price: 199 },
  { id: 3, name: "Pasta Carbonara", price: 249 }
];

// API route
app.get("/api/menu", (req, res) => {
  res.json(menu);
});

// Serve frontend
app.use(express.static(path.join(__dirname, "build")));

// Catch-all
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});