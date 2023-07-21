const express = require('express')
const router = express.Router()
const { survayRegistration, getAllSurvays } = require('../controller/SurvayController')

router.post('/create', survayRegistration)
router.get('/allsurvays', getAllSurvays)
// router.post('/userlogin', userLogin)

module.exports = router;