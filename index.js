var fs = require('fs');
var express = require('express');
var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

if(server){
    console.log("Server is running! Hold 'ctrl' and press 'c' to exit.");
}else{
    console.log("Error.");
}

var info = JSON.parse(fs.readFileSync('info.json'));

app.get('/info', getInfo);

function getInfo(req, res){
    res.send(info);
}

app.get('/add/:name/:age/', addInfo);

function addInfo(){

    
}

