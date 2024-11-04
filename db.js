const mongoose = require('mongoose');

//Define the MongoDB connecion url 
const mongoURL = 'mongodb://localhost:27017/hotelss'

mongoose.connect(mongoURL,{
    // useNewUrlParse: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("connected to MongoDb server")
})
db.on('error',(err)=>{
    console.error(" MongoDb connection error:",err)
})
db.on('disconnected',()=>{
    console.log(" MongoDb disconnected")
})

module.exports = db;