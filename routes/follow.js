const express = require('express')
const router = express.Router()
const createFollow = require('../controllers/follow')

router.post('/follow', createFollow)

module.exports = router