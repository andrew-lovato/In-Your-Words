const express = require('express')

const ImageCtrl = require('../controllers/imageCtrl.js')

const router = express.Router()

router.get('/images', ImageCtrl.getImages)
router.post('/images', ImageCtrl.createImages)

module.exports = router