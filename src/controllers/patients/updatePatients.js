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
            return res.status(404).json({message: 'Id não encontrado'}) 
            
        }      

        const cpfExists = await Patient.findOne({
            where: {
                cpf
            }})
        if (cpfExists) {   
            return res.status(409).json({message: 'CPF já consta no Banco de Dados. Confira'})
            
    
        }else {

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
            return res.status(200).json(patientUpdate) 
        
        }

    } catch (error) {
        console.log(error)
        return res.status(400).json({message:  "Erro de Servidor, tente mais tarde"});
    
    }
};

module.exports = updatePatient;