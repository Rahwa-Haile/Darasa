const express = require('express')
const router = express.Router()
const {register, login, userData} = require('../controllers/auth')


router.post('/register', register)
router.post('/login', login)
router.post('/userData', userData)

module.exports = router