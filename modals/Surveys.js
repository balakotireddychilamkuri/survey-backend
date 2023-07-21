const mongoose = require('mongoose')

const survaySchema = mongoose.Schema({
    ageGroup: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    isRegisteredVoter: {
        type: String,
        required: true,
    },
    votingFrequency: {
        type: String,
        required: true,
    },
    importantElections: {
        type: Array,
        required: true,
    },

    votingIssues: {
        type: Array,
        require: true,
    },
    votingFactors: {
        type: Array,
        require: true,
    },
    informationSources: {
        type: Array,
        require: true,
    },
    changedPreference: {
        type: String,
        require: true,
    },
    voterTurnoutMeasures: {
        type: Array,
        require: true,
    }
})

module.exports = mongoose.model("Surveys", survaySchema)

