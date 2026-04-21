import mongoose from 'mongoose';

const connectDB = async (DB_URL) => {
  try {
    if (!DB_URL) {
      throw new Error("MONGO_URI is missing in .env");
    }

    await mongoose.connect(DB_URL);

    console.log("✅ Database Connected Successfully");
  } catch (error) {
    console.log("❌ Database Connection Failed");
    console.log(error.message);
    process.exit(1); // stop server if DB fails
  }
};

export default connectDB;