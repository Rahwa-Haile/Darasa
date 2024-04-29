const express = require('express')
const router = express.Router()
const createStory = require('../controllers/story')
const upload = require('../middlewares/upload-middleware')

router.post('/story', upload.array('story', 4), createStory)

module.exports = router 