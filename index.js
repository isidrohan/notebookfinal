
const connectToMongo  = require('./db');
const express = require('express')
const cors = require('cors')
// require('./db')

// changes**
const path = require("path");


connectToMongo();
const app = express()
const port = process.env.PORT ;

app.use(cors())
app.use(express.json())

// available routes
app.use('/api/auth', require('./routers/auth'))
app.use('/api/notes', require('./routers/notes'))

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "client", "build")));
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
app.listen(port, () => {
  console.log(`Example a is listening on port ${port}`)
})