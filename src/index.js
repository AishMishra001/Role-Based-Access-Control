const express = require("express") ; 
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config() ; 


dbConnect() ; 

const app = express() ; 


// middleware 

app.use(express.json()) ; 

// routes 



//start the server

const PORT = process.env.PORT || 7002  ; 


app.listen(PORT,()=>{
  console.log(`The server is running on port : ${PORT}`)
})