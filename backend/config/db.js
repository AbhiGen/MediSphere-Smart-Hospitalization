import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(`Error : ${error}`);
        process.exit(1);
    }
}