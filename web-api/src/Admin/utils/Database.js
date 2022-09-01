const mongoose = require("mongoose");

const uri = "mongodb+srv://kavishmathur:Kavish@11402@cluster0.pzxcpgg.mongodb.net/Winkit?retryWrites=true&w=majority";

class Database
{
    constructor() {
        this.connectToDB();
    }
    connectToDB()
    {
        mongoose.connect(uri).then(()=>{
            console.log("DB success")
        }).catch((err)=>{
            console.log("Error on DB BOOM")
        })
    }
}

module.exports = new Database()