# Role Based Access Control 

## File structure 

Using MVP (model-view-page architecture) to arrange the file structure . 

![MVP Architecture](./assets/Screenshot%20from%202024-11-28%2010-33-33.png)


Install dependencies : 

 ` npm i mongoose express dotenv bcryptjs jsonwebtoken `

nodemon :  ` npm i nodemon --save-dev `


admin : 

username : Aman 
password : Aman 
role : admin 

manager  : 

"username" : "Arpeet" , 
  "password" : "Arpeet"  , 
  "role" : "manager

user : 

{
  "username" : "Manas" , 
  "password" : "Manas" ,
  "role": "user"

}