const Doctor = require('../../models/doctor');

async function registerDoctor(req, res, next) {

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

        const doctorExists = await Doctor.findOne({where: {cpf: req.body.cpf}});

        if (!doctorExists) {

        const newDoctor = await Doctor.create(doctor);
        res.status(201).json(newDoctor);
        next()

        } else {
            res.status(409).json({message: 'CPF já consta no Banco de Dados. Confira'});
            next()
        }

        } catch (error) {
            res.status(400).json({message: error.message})
            next()
    }
};

module.exports = registerDoctor;