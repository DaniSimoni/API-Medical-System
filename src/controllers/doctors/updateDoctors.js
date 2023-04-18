const Doctor = require('../../models/doctor');

async function updateDoctor(req, res, next) {

    try {
        const { id } = req.params;
        const {

            name,
            gender,
            birth,
            cpf,
            phone,
            academy,
            crmUf,
            specialization
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

        if (req.body.cpf === "") {
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

        if (req.body.crmUf === "") {
            res.status(404).json({message: 'É necessário preencher o campo CRM UF'})
            next()
        }

        if (req.body.specialization === "") {
            res.status(404).json({message: 'É necessário preencher o Specialization'})
            next()
        }

        if (req.body.phone === "") {
            res.status(404).json({message: 'É necessário preencher o campo Phone'})
            next()
        }

        
        const idExists = await Doctor.findByPk(id);

        if (!idExists) {
            request.status(404).json({ message: 'Id não encontrado.'});
        } else {
            const doctor = await Doctor.findByPk(id);
            doctor.name = name;
            doctor.gender = gender;
            doctor.birth = birth;
            doctor.cpf = cpf;
            doctor.phone = phone;
            doctor.academy = academy;
            doctor.crmUf = crmUf;
            doctor.specialization = specialization;

            const doctorUpdate = await doctor.save();
            res.status(200).json(doctorUpdate);
        }

    } catch (error) {
        return res.status(400).json({message: 'Erro de requisição. Verifique os dados!'});
    }
};

module.exports = updateDoctor;