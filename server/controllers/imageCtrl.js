const Image = require('../models/imageModel.js')

getImages = async (req, res) => {
    await Images.find({}, (err, images) => {
        if(err) {
            return res.status(400).json({ success: false, error: err })
        }
        if(!images.length) {
            return res
                    .status(404)
                    .json({ success: false, error: 'Images not found'})
        }
        return res.status(200).json({ success: true, data: images})
    }).catch(err => console.log(err))
}

createImage = (req, res) => {
    const body = req.body

    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an image',
        });
    }
    
    const image = new Images(body)
    
    if(!image) {
        return res.status(400).json({ success: false, error: err })
    }

}



module.exports = {
    getImages,
    createImage,
}