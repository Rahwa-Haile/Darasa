const express = require('express')
const router = express.Router()
const upload = require("../middlewares/upload-middleware");
const {createUserData, getAllUserDatas, getUserData, updateUserData, deleteUserData} = require('../controllers/userData')

router.post('/userData', upload.fields([{name: "avatar", maxCount: 1}, {name: "coverPhoto", maxCount: 1}]), createUserData)
router.get('/userData', getAllUserDatas)
router.get('/userData/:id', getUserData)
router.patch('/userData/:id', upload.fields([{name: 'avatar', maxCount: 1}, {name: 'coverPhoto', maxCount: 1}]), updateUserData)
router.delete('/userData/:id', deleteUserData)

module.exports = router