const express = require("express");
const session = require('express-session');
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const db = require('./config/connection');
const helpers = require('./utils/helpers');
const routes = require('./controllers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
//set up session
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db
    })
  };
  
  app.use(session(sess));

//Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('ERROR' + err))


const hbs = exphbs.create({ helpers });


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('main');
});

app.get('/details', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('details');
});

app.get('/signup', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('signup');
});

app.get('/login', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('login');
});

app.get('/profile', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('profile');
});

app.get('/cart', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('cart');
});

// app.get('/product', (req, res) => {
//     //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
//     res.render('product', { layout: 'index' });
// });


app.use(routes);

const PORT = process.env.PORT || 3001;

db.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });