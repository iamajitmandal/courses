const express = require('express');
const { postCategory } = require('../controllers/categoryController');
// const { helloFunction } = require('../controllers/categoryController');
const router = express.Router()

// router.get('/test', helloFunction)

router.post('/postcategory', postCategory);

module.exports = router