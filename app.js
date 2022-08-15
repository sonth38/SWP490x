const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

const adminRouter = require('./router/admin');

app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRouter);

app.use('/', (req, res, next) => {
  res.render('index')
})

mongoose
  .connect('mongodb+srv://admin:admin@charity.6fllypr.mongodb.net/Charity')
  .then(result => {
    app.listen(3000);
    console.log('Database connected!')
  })
  .catch(err => console.log(err))