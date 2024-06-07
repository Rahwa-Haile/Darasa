const express = require('express')
const router = express.Router()
const {addToBookmark, viewBookmark, removeFromBookmark} = require('../controllers/bookmark')
const authenticationMiddleware = require('../middlewares/authenticationMiddleware')

router.post('/bookmark/:id', authenticationMiddleware("Student"), addToBookmark)
router.get('/bookmark', authenticationMiddleware('Student'), viewBookmark)
router.delete('/bookmark/:id', authenticationMiddleware("Student"), removeFromBookmark)

module.exports = router
