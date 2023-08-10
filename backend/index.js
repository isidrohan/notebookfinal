const dotenv = require("dotenv");
const connectToMongo  = require('./db');
const express = require('express')
const cors = require('cors')
const path = require("path")

dotenv.config({path: './config.env'});


connectToMongo();
const app = express()
// const port = process.env.PORT;
const port = 5000;



app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
  res.setHeader("Access-Control-Allow-Credentials","true")
  res.send("API IS RUNNING....");
});
// available routes
app.use('/api/auth', require('./routers/auth'))
app.use('/api/notes', require('./routers/notes'))


app.listen(port, () => {
  console.log(`Example a is listening on port ${port}`)
})