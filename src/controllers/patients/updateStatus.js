const Patient = require('../../models/patient');


async function updateStatus(req, res){
    
    try {
        const newStatus = req.body.status;
       
        if (!["AGUARDANDO_ATENDIMENTO", "EM_ATENDIMENTO", "ATENDIDO", "NAO_ATENDIDO"].includes(newStatus)) {
           
            res.status(404).json({message: 'Status não encontrado'}) 

        } else {
            const status = await Patient.findByPk(req.params.id);
                status.status = newStatus;

            const statusUpdate = await status.save();
                res.status(200).json(statusUpdate) 
        }
       
    } catch (error) {
        return res.status(400).json({message: "Erro de requisição"});
    }
};

module.exports = updateStatus;