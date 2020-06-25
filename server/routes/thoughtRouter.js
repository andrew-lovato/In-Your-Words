const express = require('express')

const ThoughtCtrl = require('../controllers/thoughtCtrl')


const router = express.Router()

router.post('/thought', ThoughtCtrl.insertThought)
router.delete('/thought/:id', ThoughtCtrl.deleteThought)

router.put('/thought/:id', ThoughtCtrl.updateThought)
router.get('/thought/:id', ThoughtCtrl.getThoughtById)
router.get('/thoughts', ThoughtCtrl.getAllThoughts)

module.exports = router