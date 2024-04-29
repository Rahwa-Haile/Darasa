const Story = require('../model/story')

const createStory = async (req, res) => {
    try{
        const storyList = req.files.map((story)=> {
            return story.filename
        })
        const story = await Story.create({...req.body, story: storyList})
        res.status(201).json({story})
    }catch(error){
        console.log(error)
    }
}

module.exports = createStory