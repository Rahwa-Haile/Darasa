const express = require('express')
const router = express.Router()
const createCart = require('../controllers/cart')

router.post('/cart', createCart)

module.exports = router