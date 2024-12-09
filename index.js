const express = require('express');
const mainRouter = require('./routes/router');
const mongoose  = require('mongoose');
const e = require('express');
const app = express()
const port = 300;

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

