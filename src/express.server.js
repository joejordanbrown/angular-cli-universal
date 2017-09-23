require('zone.js/dist/zone-node');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/map');
require('rxjs/add/operator/mergeMap');
require('reflect-metadata');

const path = require('path');
const fs = require('fs');
const express = require('express');
const compression = require('compression');
const apiCache = require('apicache');

const { ngExpressEngine } = require('@nguniversal/express-engine');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');



var hash;
fs.readdirSync(__dirname).forEach(file => {
  if (file.startsWith('main')) {
    hash = file.split('.')[1];
  }
});


const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./main.' + hash + '.bundle');

const app = express();
const cache = apiCache.middleware;
const port = Number(process.env.PORT || 8080);
const baseUrl = `http://localhost:${port}`;

app.engine('html', ngExpressEngine({
  baseUrl: baseUrl,
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));



app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/../browser'));

app.use(cache('60 minutes'));
app.use(compression());
app.use('/', express.static(path.join(__dirname, '/../browser'), {index: false}));


app.get('*', function (req, res) {
  res.render('index', {
    req: req,
    res: res
  });
});

app.listen(port, function() {
  console.log(`Listening at ${port}`);
});
