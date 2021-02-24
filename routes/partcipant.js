const express = require('express')
const router = express.Router()
const Participant = require('../models/Participant')
const ParticipantController = require('../controllers/ParticipantController')
const tokenMiddleware = require('../use/auth')

router.post('/register',ParticipantController.addParticipant)
router.post('/login',ParticipantController.loginParticipant)
router.post('/newgroupe',tokenMiddleware,ParticipantController.newgroupe)
router.patch('/joingroup',tokenMiddleware,ParticipantController.joingroupe)
router.post('/anwser/:id',ParticipantController.anwser)
router.get('/getQuestion/:code',ParticipantController.getRandomQuestion)

module.exports = router