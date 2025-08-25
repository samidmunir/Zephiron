import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB successfully connected to Maravex: [${connection.connection.host}]`
    );
  } catch (error) {
    console.error("Failure to connect to MongoDB:", error);
    console.log(`Failure to connect to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
