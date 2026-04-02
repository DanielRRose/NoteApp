import express from "express";
import noteRoutes from "./routes/notesRoutes";
import router from "./routes/notesRoutes";

const APP = express();
const PORT = 5001;
APP.use("/api/notes", noteRoutes);

APP.listen(PORT, () => {
    console.log(`Sever started on port: ${PORT}`)
})