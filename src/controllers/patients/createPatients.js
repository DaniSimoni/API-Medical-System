
const Patient = require('../../models/patient');

async function createPatient (req, res) {

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
            return res.status(404).json({message: 'É necessário preencher o campo Name'})           
        }

        if (req.body.gender === "") {
            return res.status(404).json({message: 'É necessário preencher o campo Gender'})          
        }

        if (req.body.birth === "") {
            return res.status(404).json({message: 'É necessário preencher o campo Birth'})        
        }

        if (req.body.cpf === "") {
            return  res.status(404).json({message: 'É necessário preencher o campo CPF'})        
        }

        if (req.body.emergency === "") {
            return res.status(404).json({message: 'É necessário preencher o campo Emergency'})        
        }

        if (req.body.allergy === "") {
            return res.status(404).json({message: 'É necessário preencher o campo Allergy'})    
        }

        if (req.body.birth === "") {
            return res.status(404).json({message: 'É necessário preencher o campo Birth'})       
        }

        if (req.body.specialCares === "") {
            return res.status(404).json({message: 'É necessário preencher o campo Special Cares'})            
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