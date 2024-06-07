const express = require('express')
const router = express.Router()
const {addToCart, viewCart, removeFromCart} = require('../controllers/cart')
const authenticationMiddleware = require('../middlewares/authenticationMiddleware')

router.post('/cart/:id', authenticationMiddleware("Student"), addToCart)
router.get('/cart', authenticationMiddleware("Student"), viewCart)
router.delete('/cart/:id', authenticationMiddleware("Student"), removeFromCart)

module.exports = router 