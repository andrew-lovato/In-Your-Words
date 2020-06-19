const express = require('express')

const ThoughtCtrl = require('../controllers/thoughtCtrl')


const router = express.Router()

router.post('/', ThoughtCtrl.createThought)
router.delete('/:id', ThoughtCtrl.deleteThought)

router.put('/thought/:id', ThoughtCtrl.updateThought)
router.get('/thought/:id', ThoughtCtrl.getThoughtById)
router.get('/thoughts', ThoughtCtrl.getThoughts)

module.exports = router