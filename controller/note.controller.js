const DataNotFoundException = require('../exceptions/DataNotFoundException.js');
const DataPersistException = require('../exceptions/DataPersistException.js');
const noteService = require('../service/noteService.js')

class NoteController{
    async saveNote(req,resp){
        try{
            const note  = req.body;
            let savedUser = await noteService.saveNote(note)
            resp.status(201).send(savedUser)
        }catch(err){
            if(err instanceof DataNotFoundException){
                resp.status(400).send("User not found to save")
            }else if(err instanceof DataPersistException){
                resp.status(400).send("cant save user")
            }else{
                resp.status(500).send('Internal Server Error')
            }
        }
        
    }
    async deleteNoteByNoteId(req,resp){
        try{
            let id =req.query.id
            await noteService.deleteNoteByNoteId(id)
            resp.status(201).send(`${id} was deleted`)
        }catch(err){
            if(err instanceof DataNotFoundException){
                resp.status(400).send("Invalid Id")
            }else{
                resp.status(500).send("Internal Server Error")
            }
        }
        
    }
    async getAllNotes(req,resp){
        try{
            resp.status(201).send(await noteService.getAllNotes())
        }catch(err){
            if(err instanceof DataNotFoundException){
                resp.status(400).send("Notes not found to get")
            }else{
                resp.status(500).send("Internal Server Error")
            }
        }
    }
    async getAllNotesByUserEmail(req,resp){
        try{
            let email =req.query.email
            let notes = await noteService.getAllNotes();
            let filterdNotes = notes.filter(function (note){
                return note.userEmail == email;
            })
            resp.status(201).send(filterdNotes)
        }catch(err){
            if(err instanceof DataNotFoundException){
                resp.status(400).send("Notes not found to get")
            }else{
                resp.status(500).send("Internal Server Error")
            }
        }
        
    }
    async deleteNoteByUserEmail(req,resp){
        try{
            let email =req.query.email
            await noteService.deleteNoteByUserEmail(email);
            resp.status(201).send("DELETd")
        }catch(err){
            if(err instanceof DataNotFoundException){
                resp.status(400).send("Invalid Email")
            }else{
                resp.status(500).send("Internal Server Error")
            }
        }
        
    }
}

const noteController = new NoteController();
module.exports = noteController