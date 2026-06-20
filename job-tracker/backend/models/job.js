const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Applied", "Interview", "Rejected", "Offer"],
        default: "Applied"
    },
    notes: {
        type: String,
        default: ""
    },
    appliedDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Job", jobSchema)