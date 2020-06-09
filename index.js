var express = require('express')
var cors = require('cors')
//const fs = require('fs');


var app = express()

app.use(cors())

//let rawdata = fs.readFileSync('data.json');
//let records = JSON.parse(rawdata);


app.get("/", function (REQUEST, reply, next) {
    reply.send("Hello Mike");

});


app.listen(3000, function () {
    console.log('CORS-enabled web server listening on port 3000')
})