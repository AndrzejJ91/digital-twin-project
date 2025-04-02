import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  

const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/twin";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUri, {
            connectTimeoutMS: 1000,
            serverSelectionTimeoutMS: 1000,
        });
        console.log("✅ Connected to MongoDB!");
    } catch (error) {
        console.error({
            success: false,
            message: "Error connecting to the database",
            error,
        });
        process.exit(1);  
    }
};

export default connectDB;
