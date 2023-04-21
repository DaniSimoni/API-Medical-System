const express = require('express');
const connection = require('./src/database/index');

const createPatient = require('./src/controllers/patients/createPatients');
const updatePatient = require('./src/controllers/patients/updatePatients');
const updateStatus = require('./src/controllers/patients/updateStatus');
const patientsList = require('./src/controllers/patients/patientsList');
const searchPatient = require('./src/controllers/patients/searchPatients');
const deletePatient = require('./src/controllers/patients/deletePatients');

const registerDoctor = require('./src/controllers/doctors/createDoctors');
const updateDoctor = require('./src/controllers/doctors/updateDoctors');
const updateStatusDoctors = require('./src/controllers/doctors/updateStatusDoctors');
const doctorsList = require('./src/controllers/doctors/doctorsListByStatus');
const searchDoctor = require('./src/controllers/doctors/searchDoctorId');
const deleteDoctor = require('./src/controllers/doctors/deleteDoctors');

const createNurse = require('./src/controllers/nurses/createNurses');
const updateNurse = require('./src/controllers/nurses/updateNurses');
const nursesList = require('./src/controllers/nurses/nursesList');
const searchNurse= require('./src/controllers/nurses/searchNurses');
const deleteNurse = require('./src/controllers/nurses/deleteNurses');

const createAttendance = require('./src/controllers/service/attendance')

const app = express();
app.use(express.json());

connection.authenticate();
connection.sync({alter: true});

app.post('/patient', createPatient);
app.put('/patient/:id', updatePatient);
app.put('/patient/:id/status', updateStatus);
app.get('/patient', patientsList);
app.get('/patient/:id', searchPatient);
app.delete('/patient/:id', deletePatient);

app.post('/doctor', registerDoctor);
app.put('/doctor/:id', updateDoctor);
app.put('/doctor/:id/statusDoctor', updateStatusDoctors);
app.get('/doctor', doctorsList);
app.get('/doctor/:id', searchDoctor);
app.delete('/doctor/:id', deleteDoctor);    

app.post('/nurse', createNurse);
app.put('/nurse/:id', updateNurse);
app.get('/nurse', nursesList);
app.get('/nurse/:id', searchNurse);
app.delete('/nurse/:id', deleteNurse);

app.post('/attendance', createAttendance);

app.listen(3333, () => {console.log('Projeto ON!')});