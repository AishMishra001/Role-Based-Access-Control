

const register = async(req,res)=>{
  const {username , password , role } = req.body ; 

  // btw I can also do this : 
  // const username = req.body.username  
  // but I have done object destructing above 
}

const login = ()=>{

}

module.exports = {
  register , 
  login 
}