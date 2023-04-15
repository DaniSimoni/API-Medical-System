const Patient = require('../../models/patient');

async function searchPatient(req, res) {
    
    try {

        const patientExists = await Patient.findByPk(req.params.id);
       
        if (!patientExists) {
            res.status(404).json({message: 'Id não encontrado'});

        } else {
            res.status(200).json(patientExists);  
        };
        
     
    } catch (error) {
        res.status(500).json({message: "Verifique sua solicitação"})
  
    }
};

module.exports = searchPatient;