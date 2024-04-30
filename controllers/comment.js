const Comment = require('../model/comment')

const createComment = async (req, res) => {
    try{
        const comment = await Comment.create({...req.body})
        res.status(201).json({comment})
    }catch(error){
        console.log(error)
    }
}

module.exports = createComment