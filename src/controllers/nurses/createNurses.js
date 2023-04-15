const Nurse = require('../../models/nurse');

async function createNurse (req, res) {

    try {

        const nurse = {
        
        name: req.body.name,
        gender: req.body.gender,
        birth: req.body.birth,
        cpf: req.body.cpf,
        phone: req.body.phone,
        academy: req.body.academy,
        cofenUf: req.body.cofenUf, 
    
    }

    const nurseExists = await Nurse.findOne({where: {cpf: req.body.cpf}})

    if (!nurseExists) {

        const newNurse = await Nurse.create(nurse);
        res.status(201).json(newNurse)
    
    }else {
        res.status(409).json({message: "CPF consta no Banco de Dados. Confira!"})
    }

    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

module.exports = createNurse;