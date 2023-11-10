// NPM items and Middleware here
const express = require('express');
const eHandleBars = require('express-handlebars');
const session = require('express-session');
const path = require('path');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const PLACEHOLDER = require('connect-session-sequelize')(session.Store);
// AD: Just commiting out the above until we know what to use it for.

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = eHandleBars.create({});

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
// Sets up user session and stores local memory.

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// Above is just the engine declarator for Handebars. It does not impact anything
// Outside this document.

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes); //This is allowing us to access our index in our controllers folder -JKD
// app being express, this sets out static directory return. We may have to change this down the line to ensure 
// we hit main.handlebars

// This just sets up our routers via controllers.
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
//Sequelize above sets up our db via connection in config. Ask Toua about JAWSDB_URL located in there.