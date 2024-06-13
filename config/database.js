import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const database = process.env.MONGO_URI;

const databaseConnect = async () => {
  try {
    await mongoose.connect(database);
    console.log("MongoDB is connected.");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default databaseConnect;
