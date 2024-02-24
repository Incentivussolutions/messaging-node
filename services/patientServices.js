const patientRepo = require("../repository/patientRepository");

async function GetPatients()
{
    console.log("Service: GetPatients Initiated");
    return await patientRepo.getPatients();
}
async function getPatientsById(patientID)
{
    console.log("Service: GetPatientByID Initiated");
    return await patientRepo.getPatientsById(patientID);
}
async function createPatient(patient)
{
    console.log("Service: CreatePatient Initiated");
    return await patientRepo.upsertPatient(patient);
}
async function updatePatient(patient)
{
    console.log("Service: UpdatePatient Initiated");
    return await patientRepo.updatePatient(patient);
}
async function deletePatient(patientId)
{
    console.log("Service: DeletePatient Initiated");
    return await patientRepo.deletePatient(patientId);
}

module.exports={GetPatients,getPatientsById,createPatient,updatePatient,deletePatient}