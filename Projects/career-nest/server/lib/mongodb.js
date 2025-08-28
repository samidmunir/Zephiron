import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB + career-nest successfully connected: [${conn.connection.host}]`
    );
  } catch (error) {
    console.log(`*** MongoDB + career-nest failed to connect: ${error}`);
    process.exit(1);
  }
};
