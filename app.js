const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

//Databse
const db = require('./config/database');

//Test DB
db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('error: ' + err))

const app = express();

//Handlebars
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.send('INDEX'));

//User routes
app.use('/users', require('./routes/users'));

//Anime routes
app.use('/animeTops', require('./routes/animeTops'));
app.use('/animeNews', require('./routes/animeNews'));
app.use('/animeGenActions', require('./routes/animeGenActions'));
app.use('/animeGenComedys', require('./routes/animeGenComedys'));
app.use('/animeGenHorrors', require('./routes/animeGenHorrors'));
app.use('/animeGenRomances', require('./routes/animeGenRomances'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server start here on port ${PORT}`));

