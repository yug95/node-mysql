var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
   service: "Yahoo",  // sets automatically host, port and connection security settings
   auth: {
       user: "xxxxxxxxxx95@yahoo.com",
       pass: "xxxxxxxxxxxx"
   }
});

function mail(messageBody) {
    let messageBodyJson = JSON.stringify(messageBody)
    smtpTransport.sendMail({  //email options
        from: "xxxxxxxxxx95@yahoo.com", // sender address.  Must be the same as authenticated user if using Gmail.
        to: "xxxxxxxxxx95@gmail.com", // receiver
        subject: "Emailing with nodemailer", // subject
        text: messageBodyJson // body
     }, function(error, response){  //callback
        if(error){
           console.log("error",error);
        }else{
            console.log(response);
        }
        
     //    smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
     });
}

module.exports = {
    mail:mail
}
