const contactRepo = require("../repository/contactRepository");

async function GetContacts()
{
    console.log("Service: Get Contacts Initiated");
    return await patientRepo.getPatients();
}
async function getContactsById(patientID)
{
    console.log("Service: GetContactByID Initiated");
    return await patientRepo.getPatientsById(patientID);
}
async function createContact(contact)
{
    console.log("Service: Create Contact Initiated");
    return await contactRepo.createContact(contact);
}
async function updateContact(contact)
{
    console.log("Service: Update Contact Initiated");
    return await contactRepo.updateContact(contact);
}
async function deleteContact(patientId)
{
    console.log("Service: Delete Contact Initiated");
    return await patientRepo.deletePatient(patientId);
}

module.exports={GetContacts,getContactsById,createContact,updateContact,deleteContact}