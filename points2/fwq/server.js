var http= require("http");
var fs = require("fs");
http.createServer(function (req,res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    fs.readFile("../jsons/one.json",function (err,data) {
        res.end(data)
    })
}).listen(9888);