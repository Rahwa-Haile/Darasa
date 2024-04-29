const express = require('express')
const router = express.Router()
const createLearningGroup = require('../controllers/learningGroup')
const upload = require('../middlewares/upload-middleware')

router.post('/learningGroup', upload.fields([{name: 'avatar', maxCount: 1}, {name: 'coverPhoto', maxCount: 1}]), createLearningGroup)

module.exports = router