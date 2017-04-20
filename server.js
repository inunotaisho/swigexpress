const express = require('express');
const app = express();
let swig = require('swig');
swig = new swig.Swig()

app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.use('/static', express.static('public'))

app.get('/', (req, res) => res.render('index'));

app.use('/register', require('./lib/routes/register'));

app.get('/:template', (req, res) => {
  // This will look for '/views/${template}/index.html'
  res.render(`${req.params.template}`);
})

app.use(require('./lib/routes'));

app.listen(1337, () => console.log('Listening...'));
