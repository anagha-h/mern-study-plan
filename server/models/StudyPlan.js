const mongoose = require('mongoose');

const StudyPlanSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    hoursPerDay: { type: Number, required: true },
    totalDays: { type: Number, required: true },
    totalHours: { type: Number, required: true },
});

const StudyPlan = mongoose.model('StudyPlan', StudyPlanSchema);

module.exports = StudyPlan;