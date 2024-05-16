const express = require('express')
const router = express.Router()
const {createStory, getAllStories, getStory, updateStory, deleteStory} = require('../controllers/story')
const upload = require('../middlewares/upload-middleware')

router.post('/story', upload.array('story', 4), createStory)
router.get('/story', getAllStories)
router.get('/story/:id', getStory)
router.patch('/story/:id', updateStory)
router.delete('/story/:id', deleteStory)

module.exports = router 