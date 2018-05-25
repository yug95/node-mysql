const db = require('./database');
//console.log("db",db);

function connectionCheck() {
    return new Promise((resolve,reject) => {
      db.getConnection(function(err, connection) {
               if(err) {
                   if(connection) connection.release();
                 reject(err)
              } else  {
                resolve('success')
              }
          })
      })
  }

function connectionRelease() {
    db.on('release', function (connection) {
        console.log('Connection %d released', connection.threadId);
    });
}

module.exports = {
    connectionCheck:connectionCheck(),
    connectionRelease:connectionRelease()   
}
