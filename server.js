const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize express app
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/patient-profile'; // Replace with your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Patient Schema
const patientSchema = new mongoose.Schema({
    name: String,
    gender: String,
    age: Number,
    patientID: String,
    phone: String,
    email: String,
    affectedSide: String,
    condition: String,
    speciality: String,
    medicalHistory: String,
    goalReached: Number
});

// Patient Model
const Patient = mongoose.model('Patient', patientSchema);

// Routes
app.get('/api/patient/:id', async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) return res.status(404).send('Patient not found');
        res.json(patient);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

app.post('/api/patient', async (req, res) => {
    try {
        const newPatient = new Patient(req.body);
        await newPatient.save();
        res.status(201).json(newPatient);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));