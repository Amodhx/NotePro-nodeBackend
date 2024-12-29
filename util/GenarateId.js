const Note = require('../models/note.model.js');
const User = require('../models/user.model.js');

class GenarateID{
    async GenarateUserId() {
        let users = await User.find()
        if(users.length > 0){
            let last_user = users[users.length - 1]
            let number = last_user.user_id.split('-')
            return "USER-"+ ++number[number.length -1 ];
        }else{
            return "USER-1";
        }
    }
    async GenarateNoteId(){
        let notes = await Note.find();
        if(notes.length > 0){   
            let last_note = notes[notes.length - 1]
            let number = last_note.note_id.split('-')
            return "NOTE-"+ ++number[number.length -1 ];
        }else{
            return "NOTE-1";
        }
    }
}

const genId = new GenarateID();
module.exports = genId;