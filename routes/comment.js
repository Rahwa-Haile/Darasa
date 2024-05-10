const express = require('express')
const router = express.Router()
const {createComment, getComment, getAllComments, deleteComment, updateComment} = require('../controllers/comment')

router.post('/comment/:courseId', createComment)
router.get('/comment/:courseId/:id', getComment)
router.get('/comment/:courseId', getAllComments)
router.delete('/comment/:courseId/:id', deleteComment)
router.patch('/comment/:courseId/:id', updateComment)



module.exports = router