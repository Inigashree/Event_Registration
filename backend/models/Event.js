const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    venue: { type: String, required: true },
    poster: { type: String, required: true }, // URL for event poster
    registrationLink: { type: String, required: true }, // Google Form or any other link
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Club Head ID
    registeredStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }] // List of registered students
}, { timestamps: true });

module.exports = mongoose.model("Event", EventSchema);
