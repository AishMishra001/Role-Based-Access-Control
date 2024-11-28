# Role Based Access Control 

## File structure 

Using MVP (model-view-page architecture) to arrange the file structure . 

![MVP Architecture](./assets/Screenshot%20from%202024-11-28%2010-33-33.png)

## API Design 

![API Design](./assets/Screenshot%20from%202024-11-28%2010-34-15.png) 

## RBAC Implementation explaination : 

1. As you can see above there are 3 user routes : /admin , /manager , /user 

2. At the time when someone ( admin , manager , user ) is registering (/api/auth/register) they have to give there role in req.body . 

3. At the time of login they will get the jwt token . 

4. Architecture is made such that admin can access all the routes ( /admin , /manager , /user ) , manager can access only 2 routes -> /manager  , /user and user can access only /user route . 

5. This role base access control architecture is implemented using 2 middlewares : 

authMiddleware : which is used there to verify that the token is correct or not based on the route ...if the jwt token is incorrect or no token is added to header ...access will be denied . 

roleMiddleware : Authorization based on role is implement here as it is checking where is role added in in /routes/userRoutes is same as that in req.user.role . If it is not true `if(!allowedRoles.includes(req.user.role))` than the access is denied . 



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