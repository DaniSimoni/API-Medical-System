const Nurse = require('../../models/nurse');

async function searchNurse(req, res) {

    try {
        
        const nurseExists = await Nurse.findByPk(req.params.id);

        if (!nurseExists) {
            res.status(404).json({message: 'Id não enconstrado!'});

        }else {
            res.status(200).json(nurseExists);
        }

    } catch (error) {
        res.status(500).json({message: "Verifique sua solicitação!!!"});

    }

};

    module.exports = searchNurse;


