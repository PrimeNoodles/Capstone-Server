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

app.get('/', (req, res) => res.send('INDEX'));

//users routes
app.use('/users', require('./routes/users'));


const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server start here on port ${PORT}`));

