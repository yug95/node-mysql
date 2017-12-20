var authenticModel = require("../models/authentic.model");


var authenticService = {
    authentic: authentic
}

function authentic(authenticData) {
    return new Promise((resolve,reject) => {
        authenticModel.authentic(authenticData).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
   
}




module.exports = authenticService;

