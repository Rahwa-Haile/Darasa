const express = require('express')
const router = express.Router()
const {register, login, userData} = require('../controllers/auth')
const upload = require('../middlewares/upload-middleware')


router.post('/register', register)
router.post('/login', login)
router.post('/userData', upload.fields([{name: 'avatar', maxCount: 1}, {name: 'coverPhoto', maxCount: 1}]), userData)

module.exports = router