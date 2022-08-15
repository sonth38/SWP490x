const Charity = require('../models/charity');
const mongoose = require('mongoose');

const ITEMS_PER_PAGE = 3;

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
  const page = +req.query.page || 1;
  let totalItems
  Charity
    .find()
    .countDocuments()
    .then(numCharities => {
      totalItems = numCharities;
      return Charity.find()
        .skip((page -1) * ITEMS_PER_PAGE)
        .limit(ITEMS_PER_PAGE)
    })
    .then(charity => {
      // console.log('Charity show',charity)
      res.render('charity', {
        charity: charity,
        pageTitle: 'Chương trình từ thiện',
        path: '/charity',
        currentPage: page,
        hasNextPage: ITEMS_PER_PAGE * page < totalItems,
        hasPreviousPage: page > 1,
        nextPage: page + 1,
        previousPage: page -1,
        lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE)
      })
    })
    .catch(err => console.log(err))
}
