const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
    {
        note_id:String,
        noteTitle:String,
        noteDesc:String,
        createDate:String,
        priorityLevel:String,
        user_id:String
    }
)

const Note = mongoose.model('note',noteSchema);
module.exports = Note;