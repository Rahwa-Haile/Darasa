const express = require('express')
const router = express.Router()
const {createCourse, getAllCourses, getCourse, updateCourse, deleteCourse} = require('../controllers/course')
const upload = require("../middlewares/upload-middleware");


router.post('/', upload.fields([{name: 'courseImage', maxCount: 1}, {name: 'promoVideo', maxCount: 1}]), createCourse)
router.get('/', getAllCourses)
router.get('/:id', getCourse)
router.patch('/:id', updateCourse)
router.delete('/:id', deleteCourse)




module.exports = router