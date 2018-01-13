var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
   service: "Yahoo",  // sets automatically host, port and connection security settings
   auth: {
       user: "xxxxxxxxxxxx@yahoo.com",
       pass: "xxxxxxxxxxx"
   }
});

function mail(messageBody) {
    smtpTransport.sendMail({  //email options
        from: "xxxxxxxxx95@yahoo.com", // sender address.  Must be the same as authenticated user if using Gmail.
        to: "xxxxxxxxx95@gmail.com", // receiver
        subject: "Emailing with nodemailer", // subject
        text: messageBody // body
     }, function(error, response){  //callback
        if(error){
            console.log(error);
        }else{
            console.log(response);
        }
        
     //    smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
     });
}

module.exports = {
    mail:mail
}
