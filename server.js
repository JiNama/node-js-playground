//BUNCH OF DEPENDENCIES
let fs = require('fs');
let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let server = app.listen(port);

//MONGO DATABASE HANDLING
/*
let mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/', (err, db) => {
    if (err) throw err;
    let dbo = db.db('test');
    let names = dbo.collection('names');

    names.find({}, { _id: 0 }).toArray((err, res) => {
        if (err) throw err;
        console.log(res);
        db.close();
    });

});
*/


//USE /public AND GET RID OF HTML EXTENSION
app.use(express.static('public', {
    extensions: ['html']
}));

//CHECK IF SERVER IS RUNNING
if (server) {
    console.log("Server is running! Hold 'ctrl' and press 'c' to exit.");
} else {
    console.log("Error.");
}

//INFO = info.json AS JSON FILE
let info = JSON.parse(fs.readFileSync('info.json'));

//WHEN /list, getInfo
app.get('/list', getInfo);

//DISPLAY INFO (info.json)
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
setInterval(function () {
    http.get("http://joshuashephard.herokuapp.com");
}, 300000); // every 5 minutes (300000)