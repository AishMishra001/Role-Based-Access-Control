const bcrypt = require("bcryptjs") ;
const User = require("../models/userSchema") ; 
const jwt = require("jsonwebtoken")  ; 

const register = async(req,res)=>{
  try {

    const {username , password , role } = req.body ; 
  
    // btw I can also do this : 
    // const username = req.body.username  
    // but I have done object destructing above 
  
    const hashedPassword = await bcrypt.hash(password , 10 ) ; 
  
    const newUser = new User({ username , password : hashedPassword , role }) ; 
    await newUser.save() ; 
    res.status(201).json({
      message : `User registered with username ${username}`
    })
  }catch(err){
    console.error(err) ; 
    res.status(500).json({
      message : "Something went wrong" 
    })
  }
}

const login = async(req,res)=>{
    try{

        const {username , password } = req.body ; 
        const user = await User.findOne({
          username 
        })

        if(!user){
          return res.status(500).json({
            message : "User don't exist"
          })
        }

        const isMatch = await bcrypt.compare(password , user.password ) ; 

        if(!isMatch){
         return res.status(500).json({
            message : "Incorrect password"
          })
        }

        const token = jwt.sign({
          id : user._id , role : user.role 
        },process.env.JWT_SECRET , {expiresIn : "2h"})

        res.status(200).json({token})  ; 

    }catch(err){

      console.error(err) ; 


      res.status(500).json({
        message : "Something went wrong" , 
      })
    }

  
}

module.exports = {
  register , 
  login 
}