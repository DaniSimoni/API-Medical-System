const Patient = require('../../models/patient');

async function patientList (req, res) {

    try {
     
        const status = req.query;

        if(status.status) {

            if (!["AGUARDANDO_ATENDIMENTO", "EM_ATENDIMENTO", "ATENDIDO", "NAO_ATENDIDO"].includes(status.status)) {
            return res.status(400).json({message: 'Valor Inválido para Status'});
        }

            const patient = await Patient.findAll(
                {
                    where: {status: status.status}
                }
            );
            res.status(200).json(patient);

        } else {
            const patient = await Patient.findAll();
            res.json(patient);
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

module.exports = patientList;