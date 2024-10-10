const express = require('express');
const router = express.Router();
const StudyPlan = require('../models/StudyPlan')

// route to create a study plan
router.post('/', async (req, res) => {
    const { subjects, totalDays } = req.body;

    const studyPlan = subjects.map(subject => ({
        subject: subject.name,
        hoursPerDay: subject.hoursPerDay,
        totalDays: totalDays,
        totalHours: subject.hoursPerDay * totalDays,
    }));

    try {
        await StudyPlan.insertMany(studyPlan);
        res.status(200).json({ message: 'Study plan created successfully', studyPlan });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// route to get all study plans
router.get('/', async (req, res) => {
    try {
        const plans = await StudyPlan.find();
        res.status(200).json(plans);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;