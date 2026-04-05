import mongoose from 'mongoose'


export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connect to db")
    } catch (err) {
        console.log("Cannot connect to DB error: " + err)
    }
}