const express = require('express')
const router = express.Router()
const {addToCart, viewCart, removeFromCart} = require('../controllers/cart')

router.post('/cart/:id', addToCart)
router.get('/cart', viewCart)
router.delete('/cart/:id', removeFromCart)

module.exports = router 