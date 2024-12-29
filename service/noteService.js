const genarateId = require('../util/GenarateId.js');
const Note = require('../models/note.model.js');

class NoteService{

    async saveNote(note){
        let toSave = new Note(note)
        toSave.user_id = await genarateId.GenarateUserId();
        let savedUser = await toSave.save()
        return savedUser
    }
}

const noteService = new NoteService()
module.exports = noteService;