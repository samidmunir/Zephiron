import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `CareerNest + MongoDB connection successful: [${conn.connection.host}]`
    );
  } catch (e) {
    console.log("*** ERROR *** : CareerNest + MongoDB connection failed!");
    console.log(`--> Error > message: ${e.message}`);
    console.error("MongoDB connection failed.");

    return 1;
  }
};
