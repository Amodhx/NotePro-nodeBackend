const genarateId = require('../util/GenarateId.js');
const Note = require('../models/note.model.js');

class NoteService{

    async saveNote(note){
        let toSave = new Note(note)
        toSave.user_id = await genarateId.GenarateUserId();
        let savedUser = await toSave.save()
        return savedUser
    }
    async getAllNotes(){
        let notes = Note.find()
        return notes;
    }
    async deleteNoteByNoteId(id){
        await Note.deleteOne({note_id : id})
    }
    async deleteNoteByUserEmail(email){
        await Note.deleteMany({userEmail : email})
    }
}

const noteService = new NoteService()
module.exports = noteService;