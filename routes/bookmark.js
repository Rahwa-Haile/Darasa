const express = require('express')
const router = express.Router()
const createBookmark = require('../controllers/bookmark')

router.post('/bookmark', createBookmark)

module.exports = router
