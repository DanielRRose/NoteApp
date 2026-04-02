export function getAllNotes(res, req) {
    res.status(200).send("You fetched all notes!");
}

export function createNote(res, req) {
    res.status(201).json({ message: "Note created successfully" });
}

export function deleteNote(res, req) {
    res.status(200).json({ message: `Note updated successfully` });
}

export function updateNote(res, req) {
    res.status(200).json({ message: `Note updated successfully` });
}