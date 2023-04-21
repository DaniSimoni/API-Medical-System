const Doctor = require('../../models/doctor');
const { Op } = require('sequelize');

async function doctorsList(req, res) {

    try {

        const status = req.query;

        if (status.statusDoctor) {

            if (!["ATIVO", "INATIVO"].includes(status.statusDoctor)) {
                return res.status(400).json({ message: "Valor inválido para o parâmetro 'status'" });
            }

            const doctors = await Doctor.findAll(
                { where: { statusDoctor: status.statusDoctor.toUpperCase()} } 
            )
            return res.status(200).json(doctors)

        } else {
            const doctors = await Doctor.findAll();
            res.status(200).json(doctors)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

module.exports = doctorsList;
