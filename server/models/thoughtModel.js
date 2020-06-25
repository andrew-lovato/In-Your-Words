const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Thought = new Schema(
    {
        image: { type: Number },
        thought: { type: Array }
    }
)

module.exports = mongoose.model('Thought', Thought)