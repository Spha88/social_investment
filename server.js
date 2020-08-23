require('dotenv').config();
const express = require('express');
const db = require('./utilities/db');

const app = express();
db();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', require('./router/authRouter'));
app.use('/loans', require('./router/loansAndOffersRouter'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server started at port: ' + port));
