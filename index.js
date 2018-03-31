let fs = require('fs');
let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let server = app.listen(port);
/*
let mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/test');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {

    let Name = mongoose.model('Name', mongoose.Schema({name: String, age: Number}));
    let josh = new Name({name: 'josh', age: 18});

});
*/

app.use(express.static('public', {
    extensions: ['html']
}));

if (server) {
    console.log("Server is running! Hold 'ctrl' and press 'c' to exit.");
} else {
    console.log("Error.");
}

let info = JSON.parse(fs.readFileSync('info.json'));

app.get('/list', getInfo);

function getInfo(req, res) {
    res.json(info);
}

// request user input through url
app.get('/add/:name/:age/', addInfo);

function addInfo(req, res) {
    let inputName = (req.params.name).toLowerCase();
    let inputAge = Number(req.params.age);

    // {inputName: inputAge}
    info[inputName] = inputAge;

    fs.writeFileSync('info.json', JSON.stringify(info, null, 4));

    let thanksForAdding = {
        Message: 'Thank you for adding data!',
        Name: inputName,
        Age: inputAge
    }

    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();

    //res.send(thanksForAdding);

}

//app.redirect(); changes URL josh!!!

var http = require("http");
setInterval(function() {
    http.get("http://joshuashephard.herokuapp.com");
}, 300000); // every 5 minutes (300000)