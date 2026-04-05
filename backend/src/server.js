import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from './config/db.js'
import dotenv from 'dotenv';

const APP = express();
const PORT = process.env.PORT || 5001;

dotenv.config();

connectDB();

APP.use("/api/notes", notesRoutes);

APP.listen(PORT, () => {
    console.log(`Sever started on port: ${PORT}`)
})
