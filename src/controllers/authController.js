const bcrypt = require("bcryptjs") ;
const User = require("../models/userSchema") ; 
const JWT = require("jsonwebtoken")  ; 

const register = async(req,res)=>{
  try {

    const {username , password , role } = req.body ; 
  
    // btw I can also do this : 
    // const username = req.body.username  
    // but I have done object destructing above 
  
    const hashedPassword = bcrypt.hash(password , 10 ) ; 
  
    const newUser = new User({ username , password : hashedPassword , role }) ; 
    await newUser.save() ; 
    res.status(201).json({
      message : `User registered with username ${username}`
    })
  }catch{
    res.status(500).json({
      message : "Something went wrong" 
    })
  }
}

const login = ()=>{

}

module.exports = {
  register , 
  login 
}