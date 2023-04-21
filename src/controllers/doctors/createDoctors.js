const Doctor = require('../../models/doctor');

async function registerDoctor(req, res) {

    try {
        
        const doctor = {

            name: req.body.name,
            gender: req.body.gender,
            birth: req.body.birth,
            cpf: req.body.cpf,
            phone: req.body.phone,
            academy: req.body.academy,
            crmUf: req.body.crmUf,
            specialization: req.body.specialization,
            totalAtendances: req.body.totalAtendances,
            statusDoctor: req.body.statusDoctor,

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
            return res.status(404).json({message: 'É necessário preencher o campo CPF'})           
        }

        if (req.body.phone === "") {
            return res.status(404).json({message: 'É necessário preencher o campo Phone'})         
        }

        if (req.body.academy === "") {
            return res.status(404).json({message: 'É necessário preencher o campo Academy'})            
        }

        if (req.body.crmUf === "") {
            return res.status(404).json({message: 'É necessário preencher o campo CRM UF'})           
        }

        if (req.body.specialization === "") {
            return res.status(404).json({message: 'É necessário preencher o Specialization'})           
        }

        if (req.body.phone === "") {
            return res.status(404).json({message: 'É necessário preencher o campo Phone'})            
        }

        const cpfExists = await Doctor.findOne({where: {cpf: req.body.cpf}});

        if (!cpfExists) {

        const newDoctor = await Doctor.create(doctor);
        res.status(201).json(newDoctor);
       

        } else {
            res.status(409).json({message: 'CPF já consta no Banco de Dados. Confira'});
          
        }

        } catch (error) {
            res.status(400).json({message: error.message})
           
    }
};

module.exports = registerDoctor;