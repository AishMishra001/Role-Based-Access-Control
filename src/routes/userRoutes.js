const express = require("express") ; 
const verifyToken = require("../middlewares/authMiddleware")
const router = express.Router() ; 

// only admin can access this route
router.get("/admin",(req,res)=>{
   res.status(200).json({
    message : "Welcome Admin"
   })
})

// Both admin and manager can access this route

router.get("/manager", verifyToken ,(req,res)=>{
   res.status(200).json({
    message : "Welcome manager"
   })
})


// All can access this route 

router.get("/user",(req,res)=>{
  res.status(200).json({
   message : "Welcome User"
  })
})

module.exports = router ; 