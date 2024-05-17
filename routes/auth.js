const express = require('express')
const router = express.Router()
const {register, login, getAllUsers, getUser, updateUser, deleteUser} = require('../controllers/auth')


router.post('/register', register)
router.post('/login', login)
router.get('/', getAllUsers)
router.get('/:id', getUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router