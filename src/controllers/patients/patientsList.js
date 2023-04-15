const Patient = require('../../models/patient');

async function patientList (req, res) {

    try {
        
        const patient = await Patient.findAll();
        return res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

module.exports = patientList;