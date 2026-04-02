import express from "express";

const APP = express();
const PORT = 5001;

APP.get("/api/notes", (req, res) => {
    res.status(200).send("You got 5 notes");
})

APP.post("api/notes", (req, res) => {
    res.status(201).json({message: "Note created successfully."});
})

APP.put("api/notes/:id", (req, res) => {
    res.status(200).json({ message: `Note updated successfully` });
})

APP.delete("api/notes/:id", (req, res) => {
    res.status(200).json({ message: `Note updated successfully` });
})

APP.listen(PORT, () => {
    console.log(`Sever started on port: ${PORT}`)
})