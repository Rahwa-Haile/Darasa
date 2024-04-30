const Notification = require('../model/notification')


const createNotification = async (req, res) => {
    try{
        const notification = await Notification.create({...req.body, notifImage: req.file.filename})
        res.status(201).json({notification})
    }catch(error){
        console.log(error)
    }
}

module.exports = createNotification 