const Patient = require('../../models/patient');

async function updatePatient(req, res) {

    try {
        const { id } = req.params;
        const {
            name,    
            gender,
            birth,
            cpf,
            phone,
            emergency,
            allergy,
            specialCares,        
            healthInsurance
        } = req.body;

         
        const idExists = await Patient.findByPk(id)
        
        if (!idExists) {
            res.status(404).json({message: 'Id não encontrado'})           
        } else {
            const patient = await Patient.findByPk(id);
            patient.name = name;
            patient.gender = gender;
            patient.birth = birth;
            patient.cpf = cpf;
            patient.phone = phone;
            patient.emergency = emergency;
            patient.allergy = allergy;
            patient.specialCares = specialCares;
            patient.healthInsurance = healthInsurance;

            const patientUpdate = await patient.save();
            res.status(200).json(patientUpdate) 
        }
       
    } catch (error) {
        return res.status(400).json({message: 'Erro de requisição. Verifique os dados!'});
    }
};

module.exports = updatePatient;