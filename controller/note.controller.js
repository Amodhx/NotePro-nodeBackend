const note = require('../models/note.model')
const noteService = require('../service/noteService.js')

class NoteController{
    async saveNote(note){
        let savedUser = await noteService.saveNote(note)
        return savedUser
    }
    async deleteNoteByNoteId(){
        
    }
    async getAllNotes(){
        return await noteService.getAllNotes();
    }
}

const noteController = new NoteController();
module.exports = noteController