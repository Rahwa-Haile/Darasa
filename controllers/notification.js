const Notification = require('../model/notification')


const createNotification = async (req, res) => {
    try{
        const notification = await Notification.create({...req.body, notifImage: req.file.filename})
        res.status(201).json({notification})
    }catch(error){
        console.log(error)
    }
}
const getAllNotifications = async (req, res) => {
  try {
    const notification = await Notification.find({});
    res.status(200).json({ notification });
  } catch (error) {
    console.log(error);
  }
};
const getNotification = async (req, res) => {
  try {
    const notificationId = req.params.id
    const notification = await Notification.findOne({_id: notificationId});
    if(!notification){
        res.status(404).json({msg: 'notification not found'})
    }
    res.status(200).json({ notification });
  } catch (error) {
    console.log(error);
  }
};
const updateNotification = async (req, res) => {
  try {
    const notificationId = req.params.id
    const notification = await Notification.findOneAndUpdate({_id: notificationId}, req.body, {new: true, runValidators: true});
    if(!notification){
        res.status(404).json({msg: 'notification is not found'})
    }
    res.status(200).json({ notification });
  } catch (error) {
    console.log(error);
  }
};
const deleteNotification = async (req, res) => {
  try {
    const notifcationId = req.params.id
    const notification = await Notification.findOneAndDelete({_id: notificationId});
    if(!notification){
        res.status(404).json({msg: 'notification not found'})
    }
    res.status(200).json({ notification });
  } catch (error) {
    console.log(error);
  }
};


module.exports = {createNotification, getAllNotifications, getNotification, updateNotification, deleteNotification}