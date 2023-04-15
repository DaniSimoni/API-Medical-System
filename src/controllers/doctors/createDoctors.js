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
            doctorTotalAtendances: req.body.doctorTotalAtendances

        }

        const doctorExists = await Doctor.findOne({where: {cpf: req.body.cpf}});

        if (!doctorExists) {

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