require('dotenv').config();
const express = require('express');
const db = require('./utilities/db');
const cors = require('cors');

const app = express();
db();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', require('./router/authRouter'));
app.use('/loans', require('./router/loansAndOffersRouter'));
app.use('/profile', require('./router/profileRouter'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server started at port: ' + port)); 
