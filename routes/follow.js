const express = require('express')
const router = express.Router()
const {addToFollow, viewFollow, removeFromFollow} = require('../controllers/follow')

router.post('/follow/:id', addToFollow)
router.get('/follow', viewFollow)
router.delete('/follow/:id', removeFromFollow)

module.exports = router 