const express= require('express');
const mongoose= require('mongoose');
const app=express();

const url= "mongodb+srv://PreethamSagar091315:TinnuJunnu%408919243774@missionmajnucluster.pnec7le.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url,{useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

const port=9000;
app.listen(port, () =>{
    console.log('Server started');
})

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    roll: {
        type: String,
        required: true,
        unique: true,    
    },
    registration: {
        type: String,
        required: true,
        unique: true,
    },
    subjects: {
        type: [String],
        required: true,
    },
    registered_on: {
        type: Date,
        default: new Date(),
    },
})
var studentdata=mongoose.model('studentdata',studentSchema);
module.exports= studentdata;