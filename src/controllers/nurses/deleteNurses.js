const Nurse = require('../../models/nurse');

async function deleteNurse(req, res) {

    try {
        
        const idExists = await Nurse.findByPk(req.params.id);

        if (!idExists) {
            res.status(404).json({message: 'Id não encontrado'});

        } else {
            await Nurse.destroy({where: {id: req.params.id}});
            return res.status(204).json({message: 'Deletado com sucesso!!!'});
        }

    } catch (error) {
        res.status(500).json({message: "Atenção! Confira a sua solicitação"});
    }
};

module.exports = deleteNurse;