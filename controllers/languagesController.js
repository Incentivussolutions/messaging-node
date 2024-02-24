const asyncHandler = require("express-async-handler");
const languageService = require("../services/languageServices");
const tokenService=require("../middleware/tokenHandler");

//Get all the patients
const getlanguages = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await languageService.GetLanguages();
        res.status(200).json({ Operation: "Get all the language", result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Get Patient By Id
const getlanguageById = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await languageService.getlanguageById(req.params.languageId);
        res.status(200).json({ Operation: `Get the language`, result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Create patient
const createlanguage = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        languageDetails = req.body;
        if (languageDetails.Id) {
            const result = await languageService.createLanguage(languageDetails);
            res.status(200).json({ Operation: "Create language", Message: "language created successfully" });

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
const updatelanguage = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        languageDetails = req.body;
        const result = await languageService.updateLanguage(languageDetails);
        res.status(200).json({ message: `Update the language ${languageDetails.Id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});


const deletelanguage = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        console.log(req.params.id);
        const result = await languageService.deletelanguage(req.params.id);
        res.status(200).json({ message: `Delete the language ${req.params.id}` });
    }
    else {  
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

module.exports = { getlanguages, getlanguageById, createlanguage, updatelanguage, deletelanguage };