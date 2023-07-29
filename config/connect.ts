import mongoose from "mongoose";

export const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://student:student123@cluster0.k9z3lo2.mongodb.net/student?retryWrites=true&w=majority");
        await mongoose.connect(process.env.MONGO_URI as string);

        console.log("Database connection established");
    } catch (err) {
        console.log("Error connecting to Mongo");
    }
};