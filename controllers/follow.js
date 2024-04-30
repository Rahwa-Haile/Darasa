const Follow = require('../model/follow')

const createFollow = async (req, res) => {
    try{
        const follow = await Follow.create({...req.body})
        res.status(201).json({follow})
    }catch(error){
        console.log(error)
    }
}

module.exports = createFollow

