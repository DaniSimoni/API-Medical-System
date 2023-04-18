const Nurse = require('../../models/nurse');

async function createNurse (req, res, next) {

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

    if (req.body.cpf === "" ) {
        res.status(404).json({message: 'É necessário preencher o campo CPF'})
        next()
    }

    if (req.body.phone === "") {
        res.status(404).json({message: 'É necessário preencher o campo Phone'})
        next()
    }

    if (req.body.academy === "") {
        res.status(404).json({message: 'É necessário preencher o campo Academy'})
        next()
    }

    if (req.body.cofenUf === "") {
        res.status(404).json({message: 'É necessário preencher o campo Confen UF'})
        next()
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