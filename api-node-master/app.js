const express = require('express');
const PORT = 3000;
var bodyParser = require('body-parser');
var app = express();
var index = require('./router/index');
var router = require('./router/router');
var cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', index);
app.use('/api', router);
var server = app.listen(PORT, function () {
    console.log('Rodando na porta', server.address().port);
});