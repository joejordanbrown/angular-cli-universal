const path = require('path');
const fs = require('fs');
const express = require('express');
const ngExpressEngine = require('@nguniversal/express-engine').ngExpressEngine;

require('zone.js/dist/zone-node');

var files = fs.readdirSync(`${process.cwd()}/dist/server`);
var hash;

files.forEach(file => {
  if(file.startsWith('main')) {
    hash = file.split('.')[1];
  }
});

const AppServerModuleNgFactory = require('./dist/server/main.' + hash + '.bundle').AppServerModuleNgFactory;

const app = express();
const port = Number(process.env.PORT || 8080);

app.engine('html', ngExpressEngine({
  baseUrl: 'http://localhost:' + port,
  bootstrap: AppServerModuleNgFactory
}));

app.set('view engine', 'html');
app.set('views', 'dist/browser');

app.use('/', express.static('dist/browser', {index: false}));

app.get('/*', function (req, res) {
  res.render('index', {
    req: req,
    // res: res
  });
});

app.listen(port, function() {
  console.log(`Listening at ${port}`);
});
