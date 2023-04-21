const Doctor = require('../../models/doctor');
const Patient = require('../../models/patient');
const Attendance = require('../../models/attendance');


async function createAttendance(req, res) {

    try {

      const patient = await Patient.findByPk(req.body.idPatient);
      const doctor = await Doctor.findByPk(req.body.idDoctor);

      const data = {
        idPatient: req.body.idPatient, 
        idDoctor: req.body.idDoctor,
      }

   
      if (!data.idPatient || !data.idDoctor) {
        return res.status(400).json({ message: 'Os campos pacienteId e medicoId são obrigatórios.' });
      
      }
  
      const patientExists = await Patient.findByPk(data.idPatient);
      const doctorExists = await Doctor.findByPk(data.idDoctor);
      
      if (!patientExists) {
        return res.status(404).json({ message: `Paciente com id não encontrado.` });
        
      }

      if (!doctorExists) {
        res.status(404).json({ message: `Médico com id não encontrado.` });
       
      }

     
      data.idPatient.totalAttendances += 1;
      data.idDoctor.totalAttendances += 1;
      
      patient.status = 'ATENDIDO';
  
      await patient.save();
      await doctor.save();
      
      const newAttendance = await Attendance.create(data)
      return res.status(200).json({ newAttendance });   
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message:  "Erro de Servidor, tente mais tarde"});
    }
  };



  module.exports = createAttendance;
        
  
