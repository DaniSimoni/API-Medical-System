const Doctor = require('../../models/doctor');

async function doctorsList(req, res) {

    try {
        
        const status = req.query; 
      
        if (status.statusDoctor) {
            
            if (!["ATIVO", "INATIVO"].includes(status.statusDoctor)) {
                return res.status(400).json({ message: "Valor inválido para o parâmetro 'status'" });
        }    

            const doctors = await Doctor.findAll(
                {
                    where: {
                        statusDoctor: status.statusDoctor
                    }
                }
            )
            res.json(doctors)
            } else {
                const doctors = await Doctor.findAll();
                res.json(doctors)
            }
    } catch (error) {
            res.status(500).json({message: "Erro de requisição, verifique!"})
    }
};

module.exports = doctorsList;
