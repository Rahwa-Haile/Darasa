const Bookmark = require('../model/bookmark')

const createBookmark = async (req, res) => {
    const bookmark = await Bookmark.create({...req.body})
    res.status(201).json({bookmark})
}

module.exports = createBookmark 