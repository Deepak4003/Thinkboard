import mongoose from "mongoose";

export const connectDB = async () => {
    try {
       await mongoose.connect("mongodb+srv://jangiddee999:0zL2jAy16eEKSyIR@cluster0.5lyriby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
       console.log("MongoDB connected successfully");
        
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        
    }
};