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
            return res.status(404).json({ message: 'Id não encontrado.'});
        }

        const cpfExists = await Doctor.findOne({where: {cpf: req.body.cpf}})

        if (cpfExists) {   
            return res.status(409).json({message: 'CPF já consta no Banco de Dados. Confira'})
            
        }else {

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
            return res.status(200).json(doctorUpdate);
        }

  

    } catch (error) {
        return res.status(400).json({message: error.message});
    }
};

module.exports = updateDoctor;