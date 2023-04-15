const Doctor = require('../../models/doctor');

async function searchDoctor(req, res) {

try {
    
    const doctorExists = await Doctor.findByPk(req.params.id);

    if (!doctorExists) {
        res.status(404).json({message: 'Id não encontrado'});
    
    } else {
        res.status(200).json(doctorExists);
    };


} catch (error) {
    res.status(500).json({message: error.message})
}

};

module.exports = searchDoctor;