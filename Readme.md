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

## Testing 

#### Step 1 : clone repository 

   `git clone https://github.com/AishMishra001/Role-Based-Access-Control`


#### Step 2 : Install dependencies 

  Make sure npm is already installed in your pc .  

 ` npm i mongoose express dotenv bcryptjs jsonwebtoken `

nodemon setup  :  ` npm i nodemon --save-dev ` 

update the package.json :

   ` "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon src/index.js"
  } `


#### Step 3 : Turn on the system 

run : `npm run dev` ( to run nodemon )

 or 

run : node src/index.js 

( it should run smooth and show the port it is running on and db connection in terminal : 

The server is running on port : 7001 

Database connected : ac-vq65mhz-shard-00-00.bdn15bk.mongodb.net test ) 

#### Step 4 : Register 

Go to postman or thunder client and hit api : `http//localhost:7001/api/auth/register` ( POST )

Add username , password and role in body 

##### Admin : 

![](./assets/Screenshot%20from%202024-11-28%2011-26-28.png)

##### manager : 

![](./assets/Screenshot%20from%202024-11-28%2011-47-30.png)

##### user : 

![](./assets/Screenshot%20from%202024-11-28%2011-50-40.png)


#### Step 5 : Login and copy the jwt token 

hit api : `http://localhost:7001/api/auth/login` ( POST )

##### admin : 

![](./assets/Screenshot%20from%202024-11-28%2011-29-40.png) 

##### manager : 

![](./assets/Screenshot%20from%202024-11-28%2011-47-58.png)

##### user : 

![](./assets/Screenshot%20from%202024-11-28%2011-51-00.png)

#### Step 6 : Pasting this token in header 

hit api : `http://localhost:7001/api/users/admin` ( GET )

##### admin : 

![](./assets/Screenshot%20from%202024-11-28%2011-30-39.png)
![](./assets/Screenshot%20from%202024-11-28%2011-30-51.png)
![](./assets/Screenshot%20from%202024-11-28%2011-30-58.png)


As u can see it can hit all the routes as the role is "admin"


##### manager : 

![](./assets/Screenshot%20from%202024-11-28%2011-48-47.png)
![](./assets/Screenshot%20from%202024-11-28%2011-49-02.png)
![](./assets/Screenshot%20from%202024-11-28%2011-49-14.png)

As u can see the access for /admin route is denied for admin but he was able to hit /user and /manager routes 

##### user : 

![](./assets/Screenshot%20from%202024-11-28%2011-51-23.png)
![](./assets/Screenshot%20from%202024-11-28%2011-51-38.png)
![](./assets/Screenshot%20from%202024-11-28%2011-51-57.png)

As u can see the user can only hit /user route and it's access is denied for /manager and /admin routes .



#### Demo admin , manager and user credentials for testing : 

Here are demo admin , manager and user credentails , they are already registered so u can directly jump to testing steps : 

### admin : 

"username" : "Aman" 
"password" : "Aman" 
"role" : "admin" 

### manager  : 

"username" : "Arpeet" , 
  "password" : "Arpeet"  , 
  "role" : "manager

### user : 

{
  "username" : "Manas" , 
  "password" : "Manas" ,
  "role": "user"

}


### Database : 

![](./assets/Screenshot%20from%202024-11-28%2018-08-50.png)