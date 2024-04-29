const express = require('express')
const router = express.Router()
const createCourse = require('../controllers/course')
const upload = require("../middlewares/upload-middleware");


router.post('/course', upload.fields([{name: 'courseImage', maxCount: 1}, {name: 'promoVideo', maxCount: 1}]), createCourse)

module.exports = router