const Nurse = require('../../models/nurse');

async function updateNurse(req, res) {

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