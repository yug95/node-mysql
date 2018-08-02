# Node with MySQL BoilerPlate/Framework

A simple and structured way boilerplate for Node with MySQL, equipped with MVC layer model with basic validation of schema and common error handler, authentication and easily pluggable code base.

This Boilerplate have a basic CRUD operation with MySQL, authetication of API endpoint with JWT Token and Validation of request and response of each route. It contained a documentation folder which contain swagger documentation easy for front-end developer to use and understand. It contained Pm2 which helps to restart, reload and monitor application in production, provides zero downtime availability. It has Nodemailer which will send email. It has bcrypt module which will encrypt password and make it more secure. It contain Artillery for load testing.

# PreRequisite

* xampp/lampp/wampp application to run MySQL database and Apache server [Download from here](https://www.apachefriends.org/download.html).
* Download Node js and install in your operating system. [Download from here](https://nodejs.org/en/download/)
* Postman a desktop app or you can use it [chrome extension](https://chrome.google.com/webstore/category/extensions) for API testing.[Download from here](https://www.getpostman.com/apps) 

# Used Packages 

### 1. MYSQL
```
 npm install mysql 
```
* Used to get mysql function and modules to perform DB operation  [know more about package](https://www.npmjs.com/package/mysql)
* To Know more about MySQL built in functions [check here](https://www.github.com/mysqljs/mysql)

---

### 2. Express
```
npm install express 
```
* Platform it built over it [know more about express](https://www.npmjs.com/package/express)
* To Know more about Express built in functions [check here](http://expressjs.com/en/starter/installing.html)

---

### 3. Ajv
```
npm install ajv 
```
* ajv used for validation of schema [know more about ajv](https://www.npmjs.com/package/ajv)
* To Know more about ajv built in functions [check here](https://www.npmjs.com/package/ajv)

---

### 4. JWT
```
npm install jsonwebtoken 
```
* jsonwebtoken is used for authentication of api through Token [know more about jwt](https://www.npmjs.com/package/jsonwebtoken)
* To Know more about jwt built in functions [check here](https://jwt.io/)

---

### 5. Nodemon
```
npm install nodemon 
```
* Nodemon will watch the files in the directory and if file changes automatically restart application  [know more about nodemon](https://www.npmjs.com/package/nodemon)
* To Know more about nodemon [check here](https://nodemon.io)

---

### 6. pm2
```
npm install pm2  
```
* pm2 will watch, restart and reload application if any crashes happen, it provide cluster mode as well as zero downtime failure.  [know more about pm2](https://www.npmjs.com/package/pm2)
* To Know more about pm2 [check here](http://pm2.keymetrics.io/docs/usage/quick-start/)

---

### 7. nodemailer
```
npm install nodemailer  
```
* nodemailer will send mail to given mail Id as for now i used for sending if any error comes.[know more about nodemailer](https://www.npmjs.com/package/nodemailer)
* To Know more about nodemailer [check here](https://nodemailer.com/about/)

---

### 8. artillery
```
npm install artillery  
```
* artillery will perform load testing and gives logs, how sustainable your Api to perform number of request in per second .[know more about artillery](https://www.npmjs.com/package/artillery)
* To Know more about artillery [check here](https://artillery.io/)

---

### 9. bcrypt
```
npm install bcrypt  
```
* bcrypt will encrypt your password throughing hashing so your password won't store as plain text .[know more about bcrypt](https://www.npmjs.com/package/bcrypt)
* To Know more about nodemailer [check here](https://www.npmjs.com/package/bcrypt)

---

# Table Creation In DB

1. Create Table user with `id,name,age,state,country` columns.
2. you can try creating your table as well just need to change query and table name in model section.

# Get Started

1. `$ git clone https://github.com/yug95/node-mysql.git`
2. `$ npm install`
3. Launch Enviornment:
    * `$ node app.js or nodemon app.js`
4. In Cluster mode with the help of pm2 [optional step]:
    * `$ pm2 start app.js or pm2 start app.js -i <no of instances>`
5. Open in browser:
    * open `http://localhost:9890`



# API Usage 

1. signup route - `http://localhost:9890/api/signup`
     * pass json object contain username and password.
2. login route - `http://localhost:9890/api/login`
     * pass json object contain username and password.
3. other crud route are in secureApi -  `localhost:9890/secureApi/user`.
     * In all GET, PUT, DELETE and POST request pass `token` in header which you get in login response.

Example object for login request (body as JSON object) -

```
{
    "username":"test",
    "password":"testpass"
}
```
For Other Crud request - 

```
{
   "name":"username",
   "age:11,
   "state":"statename",
   "country":"countryname"
}

```
Note: You have to pass `token` for each request as header which youi will get in login response.

# Features

* To perform basic operation all `Create`, `Fetch`, `Delete` and `Update` functionality.
* Used Express framework to obtain required operations.
* Used Express router to route endpoint path.
* Used JWT Token for security and authentication of API.
* MVC structure in which `Route`, `Service` and `Model` layer.
* Used AJV as schema validator which validate request and response schema.
* Used Connection Pooling which lead to reduce number of conncetion at any point of time and reduce stress in DB which leads to better availability and Performance of DB.
* Used common error structure format for all type of error throwing in Application.
* Includes `documents` folder which contain swagger representation both in JSON and HTML, which will help front-end developer for better understanding.
* `Pm2` a process manager which help to watch, reload, restart and monitor with load balancer in each and every activity.
* `nodemailer` is used to send mail over SMTP. as for i now used for sending mail if error comes.
* `bcrypt` is used to encrypt your password through salt and hashing technique and which won't store password as plain text in database.
* `artillery` is used to perform load testing which will check sustainibility of your API at `high traffic`.

# Swagger Related task

1. How to Open Swagger - 
    * [open](http://editor.swagger.io) 
2. Go to `File` and `import file` option, import `JSON` file present in `document` folder.
3. To Download `HTML` file of particular `JSON` 
   * Go to `Generate Client` option and `html2` option it will download html file.
4. Know more about Swagger [Check here](https://swagger.io/docs/)

---

# Artillery Run 

1. First go to `/loadtest` folder
2. you can use artillery in 2 way :-
   * by hardcoding data in yml file.
   * getting data by `.csv` file.
3. For option 1 run - `artillery run hello.yml`
4. For option 2 first get CSV file with data.
5. define path in yml file and run example as i Did :- `artillery run hellocsv.yml`        





