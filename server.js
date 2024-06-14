import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import databaseConnect from "./config/database.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

// Middleware
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  // MongoDB Connection
  databaseConnect();
  console.log(`Server is running on port ${PORT}`);
});
