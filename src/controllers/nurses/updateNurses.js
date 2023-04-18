const Nurse = require('../../models/nurse');

async function updateNurse(req, res, next) {

    try {
        const { id } = req.params;
        const {

            name,
            gender,
            birth,
            cpf,
            phone,
            academy,
            cofenUf
        } = req.body;


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

        const idExists = await Nurse.findByPk(id);

        if (!idExists) {
            request.status(404).json({ message: 'Id não encontrado.'});
        } else {
            const nurse = await Nurse.findByPk(id);
            nurse.name = name;
            nurse.gender = gender;
            nurse.birth = birth;
            nurse.cpf = cpf;
            nurse.phone = phone;
            nurse.academy = academy;
            nurse.cofenUf = cofenUf;
            
            const nurseUpdate = await nurse.save();
            res.status(200).json(nurseUpdate);
        }

    } catch (error) {
        return res.status(400).json({message: 'Erro de requisição. Verifique os dados!'});
    }
};

module.exports = updateNurse;