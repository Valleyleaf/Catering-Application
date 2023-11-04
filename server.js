// NPM items and Middleware here
const express = require('express');
const eHandleBars = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const PLACEHOLDER = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;

const hbs = eHandleBars.create({});
// ------------------------------

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // store: new SequelizeStore({
  //   db: sequelize
  // })
};

app.use(session(sess));
// Sets up user session and stores local memory.

app.get()

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// Above is just the engine declarator for Handebars. It does not impact anything
// Outside this document.

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'assets')));
// app being express, this sets out static directory return. We may have to change this down the line to ensure 
// we hit main.handlebars

app.use(require('./controllers/'));
// This just sets up our routers via controllers.
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
//Sequelize above sets up our db via connection in config. Ask Toua about JAWSDB_URL located in there.