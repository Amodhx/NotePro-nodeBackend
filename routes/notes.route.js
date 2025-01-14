const Router = require('express')
const noteController = require('../controller/note.controller.js')
const auth = require('../middleware/auth.js')

class NoteRouter{
    router;

    constructor(){
        this.router = new Router();
        this.router.get("/getAllNotes",auth.protect,noteController.getAllNotes)
        this.router.get("/getNotesByEmail",noteController.getAllNotesByUserEmail)
        this.router.delete("/deleteNoteByNoteId",noteController.deleteNoteByNoteId)
        this.router.delete("/deleteNoteByUserId",noteController.deleteNoteByUserEmail)
        this.router.post("/saveNote",noteController.saveNote)
    }
}

const noteRouter = new NoteRouter();
module.exports = noteRouter