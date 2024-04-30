const express = require('express')
const router = express.Router()
const createNotification = require('../controllers/notification')
const upload = require('../middlewares/upload-middleware')


router.post('/notification', upload.single('notifImage'), createNotification)

module.exports = router