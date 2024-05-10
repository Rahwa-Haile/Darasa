const Comment = require('../model/comment')

const createComment = async (req, res) => {
    try{
        const courseId = req.params.courseId
        const referenceTo = req.query.referenceTo
        const comment = await Comment.create({...req.body, courseId, referenceTo})
        res.status(201).json({comment})
    }catch(error){
        console.log(error)
    }
}

const getComment = async (req, res) => {
    try{
        const courseId = req.params.courseId 
        const commentId = req.params.id
        const comment = await Comment.findOne({_id: commentId, courseId})
        if(!comment){
            res.status(404).json({msg: "no comment found"})
        }
        res.status(200).json({comment})
    }catch(error){
        console.log(error)
    }
}
const getAllComments = async (req, res) => {
    try{
        const courseId = req.params.courseId
        const comment = await Comment.find({courseId})
        
        res.status(201).json({comment})
    }catch(error){
        console.log(error)
    }
}
const updateComment = async (req, res) => {
    try{
        const courseId = req.params.courseId 
        const commentId = req.params.id
        const comment = await Comment.findOneAndUpdate({courseId, _id: commentId}, req.body, {new:true, runValidators: true})
        if(!comment){
            res.status(404).json({msg: 'No such comment'})
        }
        res.status(201).json({comment})
    }catch(error){
        console.log(error)
    }
}
const deleteComment = async (req, res) => {
    try{
        const courseId = req.params.courseId 
        const commentId = req.params.id
        const comment = await Comment.findOneAndDelete({courseId, _id: commentId})
       
        res.status(200).json({msg: 'comment deletion is successful'})
    }catch(error){
        console.log(error)
    }
}

module.exports = {createComment, getComment, getAllComments, updateComment, deleteComment}