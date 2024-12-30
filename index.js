const express = require('express');
const mainRouter = require('./routes/router');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const mongoose  = require('mongoose');
const app = express()
const port = 300;
const cors = require('cors')

dotenv.config();
const corsOptions = {
    origin: '*',
    methods: 'GET,POST,PUT,DELETE,OPTIONS', 
    allowedHeaders: ['Content-Type', 'Authorization'], 
  };

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use('/api/v1',mainRouter.router);


async function connectToMongoDB() {
    try{
        await mongoose.connect("mongodb://localhost:27017/NoteCollector");
        console.log("Connected To MongoDB");
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

connectToMongoDB();

app.listen(port,()=>{
    console.log(`example App Listing on port ${port}`);
})

