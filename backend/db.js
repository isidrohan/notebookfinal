const dotenv = require("dotenv");
const mongoose = require('mongoose');
// const mongoURI = "mongodb://127.0.0.1:27017/inotebook"
const mongoURI = "mongodb+srv://sidrohanme2:sidnotebook@cluster0.wg3rnbn.mongodb.net/"

dotenv.config({path: './config.env'});
// const mongoURI = process.env.DATABASE;



const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
}

module.exports = connectToMongo;