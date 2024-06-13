const express = require("express");
const databaseConnect = require("./config/database");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
databaseConnect();

app.get("/", (req, res) => {
  res.send("<h1>Chat APP</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
