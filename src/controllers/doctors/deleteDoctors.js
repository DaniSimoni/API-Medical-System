const Doctor = require('../../models/doctor');

async function deleteDoctor(req, res) {

    try {
        const idExists = await Doctor.findByPk(req.params.id);

        if (!idExists) {
            res.status(404).json({message: 'Id não encontrado'})

        }else {
            await Doctor.destroy({where: {id: req.params.id}});
            return res.status(204).json({message: 'Deletado com sucesso!'});
        }

    } catch (error) {
        res.status(500).json({ message: "Erro! Confira a sua solicitação."});
    }
};

module.exports = deleteDoctor;