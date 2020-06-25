const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Images = new Schema(
        {
        images: { type: String}
    }
)

module.exports = mongoose.model('Images', Images)