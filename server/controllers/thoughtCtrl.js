const Thought = require('../models/thoughtModel.js')

createThought = (req, res) => {
    const body = req.body

    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a thought',
        });
    }
    
    const thought = new Thought(body)
    
    if(!thought) {
        return res.status(400).json({ success: false, error: err })
    }
    
    thought
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: thought._id,
                message: 'Thought added!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message:'Thought not created!'
            })
        })
}

updateThought = async (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must type in something to update'
        })
    }

    Thought.findOne({ _id: req.params.id }, (err, thought) => {
        if(err) {
            return res.status(404).json({
                err, 
                message: 'Thought not found!',
            })
        }
        thought.thought = body.thought
        thought.image = body.image
        thought
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: thought._id,
                    message: 'Thought updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Thought not updated!'
                })
            })
    })
}

deleteThought = async (req, res) => {
    await Thought.findOneAndDelete({ _id: req.params.id }, (err, thought) => {
        if(err) {
            return res.status(400).json({ success: false, error: err})
        }

        if(!thought){
            return res
                    .status(404)
                    .json({success: false, error: 'Thought not found'})
        }

        return res.status(200).json({success: true, data: thought})
    }).catch(err => console.log(err))
}

getThoughtById = async (req, res) => {
    await Thought.findOne({ _id: req.params.id }, (err, movie) => {
        if(err){
            return res.status(400).json({ success: false, error: err})
        }

        if(!movie){
            return res
                    .status(404)
                    .json({ success: false, error: 'Thought not found'})
        }
        return res.status(200).json({ success: true, data: thought })
    }).catch(err => console.log(err))
}

getThoughts = async (req, res) => {
    await Thought.find({}, (err, thoughts) => {
        if(err) {
            return res.status(400).json({ success: false, error: err})
        }
        if(!movies.length) {
            return res
                    .status(404)
                    .json({ success: false, error: 'Thoughts not found'})
        }
        return res.status(200).json({ success: true, data: thoughts})
    }).catch(err => console.log(err))
}

module.exports = {
    createThought,
    updateThought,
    deleteThought,
    getThoughts,
    getThoughtById,
}




