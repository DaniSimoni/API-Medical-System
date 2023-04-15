const Patient = require('../../models/patient');


async function deletePatient(req, res) {

    try {
        const idExists = await Patient.findByPk(req.params.id);
        
        if (!idExists) {
            res.status(404).json({ message: "O Id informado não existe!" });

        } else {
            await Patient.destroy({where: {id: req.params.id}});
            return res.status(204).json({ message: 'Deletado com sucesso'}); 
        }
    
    
}   catch (error) {
        res.status(500).json({ message: "Erro! Confira a sua solicitação."});
    }
}

module.exports = deletePatient;