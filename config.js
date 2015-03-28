var Config = {
  buildHTML: function(body) {
    var html = '';
    if (body.type) { html += '<p>Type: ' + body.type + '</p>'; }
    if (body.name) { html += '<p>Name: ' + body.name + '</p>'; }
    if (body.email) { html += '<p>Email: ' + body.email + '</p>'; }
    if (body.telephone) { html += '<p>Telephone: ' + body.telephone + '</p>'; }
    if (body.shop) { html += '<p>Shop: ' + body.shop + '</p>'; }
    return html;
  },
  defaultFrom: 'noreply@localcoffeepass.com',
  defaultFromName: 'Local Coffee Pass',
  defaultSubject: 'Local Coffee Pass Signup',
  defaultTo: 'craig@densitycoworking.com',
  defaultToName: 'Robert Pearce',
  headers: {
    allowOrigin: 'http://robertwpearce.com',
    allowMethods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    allowHeaders: 'X-Requested-With,content-type'
  }
};

module.exports = Config;
