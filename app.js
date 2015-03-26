var config = require('./config');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mandrill = require('mandrill-api/mandrill');
var mandrillClient = new mandrill.Mandrill(process.env.MANDRILL_KEY);

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', config.headers.allowOrigin);
  res.setHeader('Access-Control-Allow-Methods', config.headers.allowMethods);
  res.setHeader('Access-Control-Allow-Headers', config.headers.allowHeaders);
  next();
});

app.post('/send_email', function(request, response) {
  var body = request.body;
  var html = config.buildHTML(body)

  var message = {
    'html': html,
    'subject': config.defaultSubject,
    'from_email': config.defaultFrom,
    'from_name': config.defaultFromName,
    'to': [
      {
        'email': config.defaultTo,
        'name': config.defaultToName,
        'type': 'to'
      }
    ],
    'headers': {
      'Reply-To': config.defaultTo
    }
  };
  mandrillClient.messages.send({
    'message': message,
    'async': true
  }, function(result) {
    response.send(result);
  }, function(e) {
    response.send('A mandrill error occurred: ' + e.name + ' - ' + e.message);
  });
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port)
});
