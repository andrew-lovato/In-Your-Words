const Images = require('../models/imageModel.js')


 
const data = [{
    images: 'https://uploads3.wikiart.org/images/wladyslaw-strzeminski/cover-for-a-book-by-julian-przybo-z-ponad-1930.jpg!Large.jpg'
},
{
    images: 'https://uploads6.wikiart.org/images/pablo-picasso/girl-on-the-ball-1905.jpg!Large.jpg'
},
{
    images: 'https://uploads8.wikiart.org/images/salvador-dali/et-post-buccellam-introivit-in-eum-satanas-psalms-40-10-1964.jpg'
}]

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

createImages = () => {
    Images.deleteMany({}, (err, images) => {
        if(err) {
            console.log(err)
        }
        return console.log(images)
    })

    data.forEach(images => {
    const image = new Images(images)
    
    image
       .save()
       .then(() => {
     console.log('added images!')
       }).catch(error => {
           console.log(error)
       })
  })
     
    
    
  

    
}



module.exports = {
    getImages,
    createImages,
}