const express = require('express')
const router = express.Router()
const {register} = require('../controllers/auth')
const uploadMiddleware = require('../middlewares/upload-middleware')
router.post('/register', uploadMiddleware.single('avatar'), register)
// router.post('/login', login)

module.exports = router