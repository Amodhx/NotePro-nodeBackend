const note = require('../models/note.model')
const noteService = require('../service/noteService.js')

class NoteController{
    async saveNote(note){
        let savedUser = await noteService.saveNote(note)
        return savedUser
    }
    async deleteNoteByNoteId(id){
        await noteService.deleteNoteByNoteId(id)
    }
    async getAllNotes(){
        return await noteService.getAllNotes();
    }
    async getAllNotesByUserEmail(email){
        let notes = await noteService.getAllNotes();
        let filterdNotes = notes.filter(function (note){
            return note.userEmail == email;
        })
        return filterdNotes;
    }
    async deleteNoteByUserEmail(email){
        await noteService.deleteNoteByUserEmail(email);
    }
}

const noteController = new NoteController();
module.exports = noteController