const dabase=require('../Helpers/dbConnection');

async function getPatients()
{
    console.log("Repo: Get all the users");
    const [result]= await db.query(`select * from patient;`);
    return result;
}
async function getPatientsById(patientId)
{
    console.log("Repo: Get patient by id");
    const [result]= await db.query(`select * from patients where patient_id=${patientId};`);
    return result;
}

async function upsertPatient(patients)
{
    console.log("Repo: Insert Patient");
    const result= await db.query(`insert into patient(patient_id,patient_name) 
                  values ('${patients.patientId}','${patients.patientName}') on duplicate key
                   update patient_name='${patients.patientName}'`);
    return result;  
}
async function updatePatient(patients)
{
    console.log("Repo: Update Patient");
    const [result]= await db.query(`update patient set  patient_name='${patients.patientName}' where patient_id='${patients.patientId}'`);
    return result;  
}
async function deletePatient(patientId)
{
    console.log("Repo: Delete Patient");
    console.log(`delete from patient where patient_id='${patientId}'`);
    const [result]= await db.query(`delete from patient where patient_id='${patients.patientId}';`);
    return result;  
}
module.exports={getPatients,getPatientsById,upsertPatient,updatePatient,deletePatient }