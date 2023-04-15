const Doctor = require('../../models/doctor');

async function updateDoctor(req, res) {

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