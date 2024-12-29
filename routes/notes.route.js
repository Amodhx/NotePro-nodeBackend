const Router = require('express')
const Note = require('../models/note.model.js')
const noteController = require('../controller/note.controller.js')

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
        try{
            const note  = req.body;
            let savedUser = await noteController.saveNote(note)
            resp.status(201).send(savedUser)
        }catch(err){
            resp.status(201).send(err)
        }
        
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