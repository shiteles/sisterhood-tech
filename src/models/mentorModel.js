const mongoose = require('mongoose')

const mentorSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId
        },
        mentorName: {
            type: String,
            required: true,
            unique: true
        },
        age: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        phoneNumberOrWhatsapp: {
            type: Number,
            required: true,
            unique: true
        },
        languagesAndTechnologies: {
            type: [String],
            required: true
        },
        githubPage: {
            type: String,
            required: true,
            unique: true
        },
        linkedinPage: {
            type: String,
            required: true,
            unique: true
        },
        workHistory: {
            type: [String],
            required: true
        },
        personalDescription: {
            type: String,
            minLenght: 0,
            maxlength: 1000,
            default: "No description"
        },
        match: {
            type: Boolean,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const Model = mongoose.model("Mentor", mentorSchema)

module.exports = Model