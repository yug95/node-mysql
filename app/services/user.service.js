var userModel = require("../models/user-model.js");


var userService = {
    getAllUser: getAllUser,
    getUserById:getUserById,
    addUser: addUser,
    updateUser:updateUser,
    deleteUser:deleteUser
}

function addUser(userData) {
    return new Promise((resolve,reject) => {
        userModel.addUser(userData).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
   
}


function updateUser(id,userData,callback) {
    return new Promise((resolve,reject) => {
        userModel.updateUser(id,userData).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
     
}

function deleteUser(id) {
    return new Promise((resolve,reject) => {
        userModel.deleteUser(id).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

function getAllUser() {
    return new Promise((resolve,reject) => {
        userModel.getAllUser().then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}

function getUserById(id) {
    return new Promise((resolve,reject) => {
        userModel.getUserById(id).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}


module.exports = userService;

