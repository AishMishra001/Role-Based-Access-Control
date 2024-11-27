const jwt = require("jsonwebtoken") ; 

const verifyToken = (req,res,next)=>{

  let token 
  const authHeader = req.headers.authorization || req.headers.Authorization ; 
  if(authHeader && authHeader.startsWith("Bearer")){

    token = authHeader.split(" ")[1] ; 

    if(!token){
      return res.status(500).json({
        message : "No token , authentication denied"
      })
    }


    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET) ; 
        req.user = decoded ; 
        console.log("The decoded user is :",req.user) ;
        next() ; 
    }catch(err){
      res.status(401).json({
        message : "Token is not valid"
      })
    }
  } else{
    return res.status(500).json({
      message : "No token provided, authentication denied"
    })
  }

}

module.exports = verifyToken ; 