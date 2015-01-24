var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require("socket.io")(http);
var clientDirectory = "/dist";

if(process.env.NODE_ENV == "development"){
	clientDirectory = "/app";
}


app.use(express.static(__dirname + clientDirectory));
app.get('*', function (req, res) {
   res.redirect("/");
});

app.get("/", function(req, res){
	 res.sendfile(__dirname +clientDirectory+"/index.html");
});

//
io.on("connection", function(cliente){
	console.log(cliente.id);
});


http.listen(3000, function () {
    console.log("Listening on port 3000");
    
});
