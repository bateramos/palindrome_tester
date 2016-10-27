const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const palindromeController = require('./controllers/palindromeController');

app.post('/api/verify', palindromeController.isPalindrome);

app.use('/*', (req, res, next) => {
	res.render('index.html');
	next();
});

const port = 3000;

app.listen(port, () => {
	console.log("Server starter at port " + port);
});