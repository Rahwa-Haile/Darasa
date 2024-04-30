const express = require('express')
const router = express.Router()
const createComment = require('../controllers/comment')

router.post('/comment', createComment)

module.exports = router