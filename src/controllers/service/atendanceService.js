const Doctor = require('../../models/doctor');
const Patient = require('../../models/patient');

async function service(req,res) {

    try {

      const { idPatient, idDoctor } = req.body;
  
      if (!idPatient || !idDoctor) {
        return res.status(400).json({ message: 'Os campos pacienteId e medicoId são obrigatórios.' });
      }
  
      const patient = await Patient.findByPk(idPatient);
      const doctor = await Doctor.findByPk(idDoctor);
  
      if (!patient) {
        return res.status(404).json({ message: `Paciente com id ${idPatient} não encontrado.` });
      }
  
      if (!doctor) {
        return res.status(404).json({ message: `Médico com id ${idDoctor} não encontrado.` });
      }
  
      patient.totalAtendances += 1;
      doctor.totalAtendances += 1;
  
      patient.status = 'ATENDIDO';
  
      await patient.save();
      await doctor.save();
  
      return res.status(200).json({ patient, doctor });
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  };

  module.exports = service;
        
  
