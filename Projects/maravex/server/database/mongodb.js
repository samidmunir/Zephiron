import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MaraveX + MongoDB connection successful: [${conn.connection.host}]`
    );
  } catch (e) {
    console.log("*** MaraveX + MongoDB connection failed! ***");
    console.log(`\tERROR > message: ${e.message}`);
    console.error("MongoDB connection failed.");

    return 1;
  }
};
