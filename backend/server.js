import express from "express";
import db from './config/database.js';

const app = express();
const PORT = 5000;

const result = await db.query("SELECT * FROM skills");
console.log(result);

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
