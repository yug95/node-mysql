var apis = require("./config/api-config");
var port = "9890";

apis.app.listen(process.env.PORT || 9890, function (){
    console.log("server connected to port "+port);
})