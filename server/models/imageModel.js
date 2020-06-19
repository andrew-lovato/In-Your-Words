const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Images = new Schema(
        {
        images: { type: Array }
    }
)