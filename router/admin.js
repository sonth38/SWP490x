const express = require('express');

const adminController = require('../controllers/admin')

const router = express.Router();

router.get('/add-charity', adminController.getAddCharity)

router.post('/add-charity', adminController.postAddCharity)

router.get('/charity', adminController.getCharity)


module.exports = router;
