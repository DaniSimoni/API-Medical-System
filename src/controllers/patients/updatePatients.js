const Patient = require('../../models/patient');

async function updatePatient(req, res, next) {

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
        
        if (req.body.name === "") {
            res.status(404).json({message: 'É necessário preencher o campo Name'})
            next()
        }

        if (req.body.gender === "" || req.body.gender === null) {
            res.status(404).json({message: 'É necessário preencher o campo Gender'})
            next()
        }

        if (req.body.birth === "" || req.body.birth === null) {
            res.status(404).json({message: 'É necessário preencher o campo Birth'})
            next()
        }

        if (req.body.cpf === "" || req.body.cpf === null) {
            res.status(404).json({message: 'É necessário preencher o campo CPF'})
            next()
        }

        if (req.body.emergency === "" || req.body.emergency === null) {
            res.status(404).json({message: 'É necessário preencher o campo Emergency'})
            next()
        }

        if (req.body.allergy === "" || req.body.allergy === null) {
            res.status(404).json({message: 'É necessário preencher o campo Allergy'})
            next()
        }

        if (req.body.specialCares === "" || req.body.specialCares === null) {
            res.status(404).json({message: 'É necessário preencher o campo Special Cares'})
            next()
        }
 
                      
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

        if (!cpfExists) {   

            const newPatient = await Patient.create(patient)
                res.status(201).json(newPatient)
                next()
    
                }else {
                    res.status(409).json({message: 'CPF já consta no Banco de Dados. Confira'})
                    next()
                }
    } catch (error) {
        return res.status(400).json({message: 'Erro de requisição. Verifique os dados!'});
        next()
    }
};

module.exports = updatePatient;