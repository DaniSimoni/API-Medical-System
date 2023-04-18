
const Patient = require('../../models/patient');

async function createPatient (req, res, next) {

    try {
        
        const patient = {

            name: req.body.name,    
            gender: req.body.gender,
            birth: req.body.birth,
            cpf: req.body.cpf,
            phone: req.body.phone,
            emergency: req.body.emergency,
            allergy: req.body.allergy,
            specialCares: req.body.specialCares,        
            healthInsurance: req.body.healthInsurance,
            status: req.body.status,        
            totalAtendances: req.body.totalAtendances,
        }

        if (req.body.name === "") {
            res.status(404).json({message: 'É necessário preencher o campo Name'})
            next()
        }

        if (req.body.gender === "") {
            res.status(404).json({message: 'É necessário preencher o campo Gender'})
            next()
        }

        if (req.body.birth === "") {
            res.status(404).json({message: 'É necessário preencher o campo Birth'})
            next()
        }

        if (req.body.cpf === "") {
            res.status(404).json({message: 'É necessário preencher o campo CPF'})
            next()
        }

        if (req.body.emergency === "") {
            res.status(404).json({message: 'É necessário preencher o campo Emergency'})
            next()
        }

        if (req.body.allergy === "") {
            res.status(404).json({message: 'É necessário preencher o campo Allergy'})
            next()
        }

        if (req.body.birth === "") {
            res.status(404).json({message: 'É necessário preencher o campo Birth'})
            next()
        }

        if (req.body.specialCares === "") {
            res.status(404).json({message: 'É necessário preencher o campo Special Cares'})
            next()
        }
                
        const cpfExists = await Patient.findOne({where: {cpf: req.body.cpf}})

        if (!cpfExists) {   

        const newPatient = await Patient.create(patient)
            res.status(201).json(newPatient)

            }else {
                res.status(409).json({message: 'CPF já consta no Banco de Dados. Confira'})
            }
        
    

    } catch (error) {
            res.status(400).json({message: "Erro de Sistema!"})
    }
};

module.exports = createPatient;