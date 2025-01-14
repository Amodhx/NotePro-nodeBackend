const genarateId = require('../util/GenarateId.js');
const Note = require('../models/note.model.js');
const DataPersistException = require('../exceptions/DataPersistException.js');
const DataNotFoundException = require('../exceptions/DataNotFoundException.js');

class NoteService{

    async saveNote(note){
        let toSave = new Note(note);
        if(toSave){
            toSave.note_id = await genarateId.GenarateNoteId();
            let notesve =await toSave.save();
            if(notesve){
                return notesve;
            }else{
                throw new DataPersistException("Cant Save Note",400);
            }
        }else{
            throw new DataNotFoundException("Cant Find Note",400);
        }
    }
    async getAllNotes(){
        const notes = await Note.find({});
        if(notes.length === 0){
            throw new DataNotFoundException('Users Not Found', 404);
        }else{
            return notes;
        }
    }
    async deleteNoteByNoteId(id){
        const deletedCount = await Note.deleteOne({note_id : id})
        if(deletedCount === 0){
            throw new DataNotFoundException('Note not found with the given id', 404);
        }
    }
    async deleteNoteByUserEmail(email){
        const deletedCount = await Note.deleteOne({userEmail : email})
        if(deletedCount === 0){
            throw new DataNotFoundException('Note not found with the given email', 404);
        }
    }
}

const noteService = new NoteService()
module.exports = noteService;