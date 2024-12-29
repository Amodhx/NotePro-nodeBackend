const Note = require('../models/note.model.js');
const User = require('../models/user.model.js');

class GenarateID{
    async GenarateUserId() {
        let users = await User.find()
        let last_user = users[(await users).length - 1]
        let number = last_user.user_id.split('-')
        number[number.length -1 ]
        return "USER-"+ ++number[number.length -1 ];
    }
    async GenarateNoteId(){
        
    }
}

const genId = new GenarateID();
module.exports = genId;