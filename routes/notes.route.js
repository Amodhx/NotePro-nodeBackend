const Router = require('express')
const Note = require('../models/note.model.js')

class NoteRouter{
    router;

    constructor(){
        this.router = new Router();
        this.router.get("/getAllNotes",this.getAllNotes)
        this.router.get("/getNotesByEmail",this.getNotesByEmail)
        this.router.delete("/deleteNoteByNoteId",this.deleteNoteByNoteId)
        this.router.delete("/deleteNoteByUserId",this.deleteNoteByUserId)
        this.router.post("/saveNote",this.saveNote)
    }

    async saveNote(req,resp){
        console.log("Save Note");
        resp.status(201).send()
        
    }
    async getAllNotes(req,resp) {
        console.log("GetAllNotes");
        resp.status(201).send()
    }
    async getNotesByEmail(req,resp){
        console.log("getNotesByEmail");
        resp.status(201).send()
    }
    async deleteNoteByNoteId(req,resp){
        console.log("deleteNoteByNoteId");
        resp.status(201).send()
    }
    async deleteNoteByUserId(req,resp){
        console.log("deleteNoteByUserId");
        resp.status(201).send()
    }
}

const noteRouter = new NoteRouter();
module.exports = noteRouter