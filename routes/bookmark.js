const express = require('express')
const router = express.Router()
const {addToBookmark, viewBookmark, removeFromBookmark} = require('../controllers/bookmark')

router.post('/bookmark/:id', addToBookmark)
router.get('/bookmark', viewBookmark)
router.delete('/bookmark/:id', removeFromBookmark)

module.exports = router
