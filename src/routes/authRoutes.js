const express = require('express') ; 
const { register, login } = require('../controllers/authController');

const router = express.Router() ; 


router.post("/register" , register ) ; 

router.post("/login" , login ) ; 

// writting the register and login login in controllers 


module.exports = router ; 