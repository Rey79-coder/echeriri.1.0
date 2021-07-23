const express = require('express');
// const routes = require('./routes');
const sequelize = require('./config/connection');
const path = require('path');
// const controllers = require('./controllers/');

const app = express();
const PORT = process.env.PORT || 3003;

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// turn on routes
// app.use(routes);

// FOR TESTING PURPOSES
app.get('/', (req, res) => {
  res.send('/views/homepage.handlebars');
});

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => 
  console.log(`Now listening on port ${PORT}!`));
});











// const express = require('express');
// const app = express();
// // const exphbs = require('express-handlebars');
// const path = require('path');
// // const routes = require('api');

// const port = 3003;


// app.use(express.static('./public/css/dashboard.css'));

// const hbs = expbs.create({

// })

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.listen(port, () => {
//   console.log(`App listening to port ${port}`);
// });



// const sequelize = require('./config/connection');
// const routes = require('./controllers/');


// const hbs = exphbs.create({});

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



// const path = require('path');
// const express = require('express');
// const session = require('express-session');
// const exphbs = require('express-handlebars');

// const app = express();
// const PORT = process.env.PORT || 3001;

// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

// const helpers = require('./utils/helpers');

// const hbs = exphbs.create({ helpers });

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(require('./controllers'));

// // turn on connection to db and server
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => 
//   console.log(`Now listening on port ${PORT}!`));

