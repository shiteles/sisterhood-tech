const mongoose = require('mongoose')

const menteeSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId
        },
        menteeName: {
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
        goal: {
            type: String,
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
            required: true
        },
        mentorId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Mentor"
        },
    },
    {
        timestamps: true
    }
);

const Model = mongoose.model("Mentee", menteeSchema);

module.exports = Model