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
            resp.status(500).send(err)
        }
        
    }
    async getAllNotes(req,resp) {
        try{
            resp.status(201).send(await noteController.getAllNotes())
        }catch(err){
            resp.status(500).send(err)
        }
        
    }
    async getNotesByEmail(req,resp){
        let email =req.query.email
        try{
            resp.status(201).send(await noteController.getAllNotesByUserEmail(email))  
        }catch(err){
            resp.status(500).send(err)
        }
        
    }
    async deleteNoteByNoteId(req,resp){
        let id =req.query.id
        try{
            await noteController.deleteNoteByNoteId(id)
            resp.status(201).send()
        }catch(err){
            resp.status(500).send(err)
        }
    }
    async deleteNoteByUserId(req,resp){
        try{
            let email =req.query.email
            await noteController.deleteNoteByUserEmail(email)
            resp.status(201).send()
        }catch(err){
            resp.status(500).send(err)
        }
    }
}

const noteRouter = new NoteRouter();
module.exports = noteRouter