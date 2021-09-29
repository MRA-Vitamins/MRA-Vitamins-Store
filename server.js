const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const db = require('./config/connection');
const helpers = require('./utils/helpers');


//Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('ERROR' + err))
const app = express();

const hbs = exphbs.create({ helpers });


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('main', { layout: 'index' });
});

app.get('/details', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('details', { layout: 'index' });
});

app.get('/signup', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('signup', { layout: 'index' });
});

app.get('/login', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('login', { layout: 'index' });
});

app.get('/profile', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('profile', { layout: 'index' });
});

app.get('/cart', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('cart', { layout: 'index' });
});

app.get('/product', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('product', { layout: 'index' });
});


app.use('/mra', require('./routes/index'));



const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server started on ${PORT}`));