const asyncHandler = require("express-async-handler");
const patientService = require("../services/patientServices");
const tokenService=require("../middleware/tokenHandler");

//Get all the patients
const getPatients = asyncHandler(async (req, res) => {
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
const getPatient = asyncHandler(async (req, res) => {
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
const createPatients = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        patientDetails = req.body;
        if (patientDetails.patientId || patientDetails.patientName) {
            const result = await patientService.createPatient(patientDetails);
            res.status(200).json({ Operation: "Create Patient", Message: "Patient created successfully" });

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
const updatePatients = asyncHandler(async (req, res) => {
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


const deletePatients = asyncHandler(async (req, res) => {
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

module.exports = { getPatients, getPatient, createPatients, updatePatients, deletePatients };