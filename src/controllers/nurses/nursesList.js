const Nurse = require('../../models/nurse');

async function nursesList(req, res) {

    try {
        
        const nurse = await Nurse.findAll();
        return res.status(200).json(nurse);
        
    } catch (error) {
        res.status(500).json({message: 'Erro de requisição, verifique os dados!!'});
}
};

module.exports = nursesList;