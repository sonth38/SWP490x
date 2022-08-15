const Charity = require('../models/charity');
const mongoose = require('mongoose');

exports.getAddCharity = (req, res, next) => {
  res.render('add-charity');
};

exports.postAddCharity = (req, res, next) => {
  const title = req.body.title;
  const organization = req.body.organization;
  const objectives = req.body.objectives;
  const date = req.body.date;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;

  const charity = new Charity({
    title: title,
    organization: organization,
    objectives: objectives,
    date: date,
    imageUrl: imageUrl,
    description: description,
  });

  charity
    .save()
    .then(result => {
      console.log('Created Charity')
      res.redirect('/')
    })
    .catch(err => console.log(err))
};

exports.getCharity = (req, res, next) => {
  Charity
    .find()
    .then(charity => {
      // console.log('Charity show',charity)
      res.render('charity', {
        charity: charity
      })
    })
    .catch(err => console.log(err))
}
