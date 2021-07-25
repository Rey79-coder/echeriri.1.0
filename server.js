const helpers = require('./utils/helpers');
const express = require('express');
// const routes = require('./routes');
const sequelize = require('./config/connection');
const path = require('path');
const routes = require('./controllers/');

const app = express();
const PORT = process.env.PORT || 3001;

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


var cookieParser = require('cookie-parser')
 
app.use(cookieParser());
app.use(session(sess));


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));




// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => 
  console.log(`Now listening on port ${PORT}!`));
});


// const helpers = require('./utils/helpers');
// const express = require('express');
// // const routes = require('./routes');
// const sequelize = require('./config/connection');
// const path = require('path');
// const routes = require('./controllers/');

// const app = express();
// const PORT = process.env.PORT || 3001;

// const exphbs = require('express-handlebars');
// const hbs = exphbs.create({ helpers });

// const session = require('express-session');

// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//   secret: process.env.Secret,
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// const dotenv = require('dotenv').config()

// app.use(express.cookieParser('your secret here'));
// app.use(express.session());
// app.use(session(sess));

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));


// // turn on routes
// app.use(routes);

// // turn on connection to db and server
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => 
//   console.log(`Now listening on port ${PORT}!`));
// });