<<<<<<< HEAD

const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
=======
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
>>>>>>> cf6ef8e75b189b72b0d97c0d299e994d1036c6cb

const app = express();
const PORT = process.env.PORT || 3001;

<<<<<<< HEAD
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => 
  console.log(`Now listening on port ${PORT}!`));
});
=======
const sequelize = require('./config/connection');
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

app.use(session(sess));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
>>>>>>> cf6ef8e75b189b72b0d97c0d299e994d1036c6cb
