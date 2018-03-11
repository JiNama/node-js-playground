var express = require('express');
var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

if(server){
    console.log("Server is running! Hold 'ctrl' and press 'c' to exit.");
}else{
    console.log("Error.");
}