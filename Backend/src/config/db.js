import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rahulstocknew:Rahul5080@cluster0.gemj5.mongodb.net/sadi"
    );
    console.log(`MongoDB connected ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
    mongoose.disconnect();
    process.exit(1);
  }
};

export default connectDB;
