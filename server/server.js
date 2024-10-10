const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const studyPlanRoutes = require('./routes/studyPlan');

// initialize the app
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/api/studyplans', studyPlanRoutes);

// mongodb connection
mongoose.connect('mongodb://localhost:27017/studyplanner', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});