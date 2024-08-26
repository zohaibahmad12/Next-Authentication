import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to database");
  } catch (error) {
    console.log(`Error Connecting to database {${error.message}}`);
  }
};

export default connectDB;
