const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Thought = new Schema(
    {
        currentImg: { type: Number },
        newThought: { type: Array } 
    }
)

module.exports = mongoose.model('Thought', Thought)