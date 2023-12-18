let express = require('express');
let app = express();
app.get('/', function(req, res){
	res.send("<h1>Привет Express!</h1>");
});
app.listen(3000);
