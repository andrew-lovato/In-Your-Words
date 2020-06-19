const express = require('express')

const ImageCtrl = require('../controllers/imageCtrl.js')

const router = express.Router()

router.get('/', ImageCtrl.getImages)
router.post('/images', ImageCtrl.createImage)

module.exports = router