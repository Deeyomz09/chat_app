const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Chat APP</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
