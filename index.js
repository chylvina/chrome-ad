var express = require('express');
var hbs = require('hbs');
var request = require('request');
var app = express();

app.use(express.bodyParser());

// set the view engine to use handlebars
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body); // Print the google web page.
  }
});

return;

app.get('/ga/:url', function(req, res){
  var data = {
    title: '',
    body: '<div><a href="http://baidu.com">this is a link</a></div>'
  };
  res.render('index', data);
});

app.listen(8181);