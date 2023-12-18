let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended:false});
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let index = require('./routes/index.js');
app.use('/', index);

let article = require('./routes/admin.js');
app.use('/article', article);

let admin = require('./routes/admin.js');
app.use('/admin', admin);

app.use(express.static(__dirname + '/public'));
app.listen(3000);
