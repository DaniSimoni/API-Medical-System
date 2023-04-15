const Doctor = require('../../models/doctor')

async function updateStatusDoctors(req, res) {

    try {
        const newStatusDoctor = req.body.statusDoctor;

        if (!["Ativo", "Inativo"].includes(newStatusDoctor)) {
          
            res.status (404).json({message: 'Status não encontrado.'}); 
        
        } else {
            const status = await Doctor.findByPk(req.params.id);
            status.statusDoctor = newStatusDoctor;

            const statusDoctorsUpdate = await status.save();
                res.status(200).json(statusDoctorsUpdate)

        }

    } catch (error) {
        return res.status(400).json({message: "Erro de requisição"});
    }
}

module.exports = updateStatusDoctors;