var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();


app.use(express.static(path.join(__dirname,'./client/static')));
app.get('/',function (req,res) {
	// body...
	res.render('/client/static/index.html');
})

app.listen(8899,function(){
	console.log('listening on 8899');
})