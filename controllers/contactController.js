const asyncHandler = require("express-async-handler");
const contactService = require("../services/contactServices");
const tokenService=require("../middleware/tokenHandler");

//Get all the patients
const getContacts = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await patientService.GetPatients();
        res.status(200).json({ Operation: "Get all the patients", result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Get Patient By Id
const getContact = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await patientService.getPatientsById(req.params.patientId);
        res.status(200).json({ Operation: `Get the Patient`, result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Create patient
const createContacts = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        contactDetails = req.body;
        if (contactDetails.ContactId || contactDetails.City) {
            const result = await contactService.createContact(contactDetails);
            res.status(200).json({ Operation: "Create Contacts", Message: "Contact created successfully" });

        }
        else {
            res.status(400);
            throw new Error("All fields are mandatory");
        }
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }

});


//Update Patients 
const updateContacts = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        patientDetails = req.body;
        const result = await patientService.updatePatient(patientDetails);
        res.status(200).json({ message: `Update the contact ${patientDetails.patientId}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});


const deleteContacts = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        console.log(req.params.id);
        const result = await patientService.deletePatient(req.params.id);
        res.status(200).json({ message: `Delete the contacts ${req.params.id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

module.exports = { getContacts, createContacts, deleteContacts, updateContacts, getContact };