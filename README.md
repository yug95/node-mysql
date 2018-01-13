# Node with MySQL BoilerPlate/Framework

A simple and structured way boilerplate for Node with MySQL, equipped with MVC layer model with basic validation of schema and common error handler, authentication and easily pluggable code base.

This Boilerplate have a basic CRUD operation with MySQL, authetication of API endpoint with JWT Token and Validation of request and response of each route. It contained a documentation folder which contain swagger documentation easy for front-end developer to use and understand. It contained Pm2 which helps to restart, reload and monitor application in production, provides zero downtime availability. It has Nodemailer which will send email.

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

1. login route - `http://localhost:9890/api/login`
     * pass json object contain username and password.
2. other crud route are in secureApi -  `localhost:9890/secureApi/user`.
     * In all GET, PUT, DELETE and POST request pass `token` in header which you get in login response.

Example object for login and Post request -

```
{
    "username":"test",
    "password":"testpass"
}
```


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

# Swagger Related task

1. How to Open Swagger - 
    * [open](http://editor.swagger.io) 
2. Go to `File` and `import file` option, import `JSON` file present in `document` folder.
3. To Download `HTML` file of particular `JSON` 
   * Go to `Generate Client` option and `html2` option it will download html file.
4. Know more about Swagger [Check here](https://swagger.io/docs/)

---

        





