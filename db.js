const dotenv = require("dotenv")
const mongoose = require('mongoose');

dotenv.config({path: './config.env'})
const mongoURI = process.env.DATABASE


const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
    console.log("connect to database mongodb");
}

module.exports = connectToMongo;