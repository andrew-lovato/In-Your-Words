const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Thought = new Schema(
    {
        image: { type: String },
        thought: { type: String }
    }
)

module.exports = mongoose.model('Thought', Thought)