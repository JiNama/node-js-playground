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

app.get('/list', getInfo);

function getInfo(req, res){
    res.json(info);
}

// request user input through url
app.get('/add/:name/:age/', addInfo);

function addInfo(req, res){
    var inputName = (req.params.name).toLowerCase();
    var inputAge = Number(req.params.age);

    // {inputName: inputAge}
    info[inputName] = inputAge;

    fs.writeFileSync('info.json', JSON.stringify(info, null, 4), finished);

    function finished(err){
        if (err){
            console.log(err);
        }else{
            console.log('It worked!');
        }
    }

    var thanksForAdding = {
        Message: 'Thank you for adding data!',
        Name: inputName,
        Age: inputAge
    }

    res.send(thanksForAdding);
}

