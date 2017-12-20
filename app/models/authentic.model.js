var db = require('../../config/database');

var authenticModel = {
    authentic:authentic
}

function authentic(authenticData) {
    return new Promise((resolve,reject) => {
        db.query(`SELECT * FROM user WHERE username ='${authenticData.username}' AND password='${authenticData.password}'`,(error,rows,fields)=>{
            if(!!error) {
                reject(error);
            } else {
                resolve(rows);
            }
       });
    });  
}

module.exports = authenticModel;

