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

    if (req.body.name === "") {
        return res.status(404).json({message: 'É necessário preencher o campo Name'})       
    }

    if (req.body.gender === "") {
        return res.status(404).json({message: 'É necessário preencher o campo Gender'})        
    }

    if (req.body.birth === "") {
        return res.status(404).json({message: 'É necessário preencher o campo Birth'})        
    }

    if (req.body.cpf === "" ) {
        return res.status(404).json({message: 'É necessário preencher o campo CPF'})        
    }

    if (req.body.phone === "") {
        return res.status(404).json({message: 'É necessário preencher o campo Phone'})       
    }

    if (req.body.academy === "") {
        return res.status(404).json({message: 'É necessário preencher o campo Academy'})       
    }

    if (req.body.cofenUf === "") {
        return res.status(404).json({message: 'É necessário preencher o campo Confen UF'})       
    }


    const nurseExists = await Nurse.findOne({where: {cpf: req.body.cpf}})

    if (!nurseExists) {

        const newNurse = await Nurse.create(nurse);
        res.status(201).json(newNurse)
    
    }else {
        res.status(409).json({message: "CPF consta no Banco de Dados. Confira!"})
    }

    } catch (error) {
        res.status(400).json({message:  "Erro de Servidor, tente mais tarde"})
    }
};

module.exports = createNurse;