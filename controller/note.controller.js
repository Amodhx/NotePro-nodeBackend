const noteService = require('../service/noteService.js')

class NoteController{
    async saveNote(req,resp){
        const note  = req.body;
        let savedUser = await noteService.saveNote(note)
        resp.status(201).send(savedUser)
    }
    async deleteNoteByNoteId(req,resp){
        let id =req.query.id
        await noteService.deleteNoteByNoteId(id)
    }
    async getAllNotes(req,resp){
        resp.status(201).send(await noteController.getAllNotes())
    }
    async getAllNotesByUserEmail(req,resp){
        let email =req.query.email
        let notes = await noteService.getAllNotes();
        let filterdNotes = notes.filter(function (note){
            return note.userEmail == email;
        })
        return filterdNotes;
    }
    async deleteNoteByUserEmail(req,resp){
        let email =req.query.email
        await noteService.deleteNoteByUserEmail(email);
    }
}

const noteController = new NoteController();
module.exports = noteController