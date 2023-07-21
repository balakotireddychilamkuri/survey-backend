const Survay = require('../modals/Surveys')

const survayRegistration = async (req, res) => {
    const body = req.body;
    console.log(req.body, "Ganesh")
    const result = await Survay.create(body)
        if (result) {
            res.send(result)
        }

   
}

const getAllSurvays = async (req, res) => {
    const result = await Survay.find({})
    res.send(result)
}



module.exports = {
    survayRegistration,
    getAllSurvays
}