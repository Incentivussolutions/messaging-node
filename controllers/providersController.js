const asyncHandler = require("express-async-handler");
const providersService = require("../services/providersService");
const tokenService=require("../middleware/tokenHandler");

//Get all the patients
const getProviders = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await providersService.GetProviders();
        res.status(200).json({ Operation: "Get all the Providers", result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Get Patient By Id
const getProvidersById = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await providersService.getProvidersById(req.body.providersId);
        res.status(200).json({ Operation: `Get the Providers`, result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Create patient
const createProviders = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        providersDetails = req.body;
        console.log(providersDetails.Id);
        if (providersDetails.Id) {
            const result = await providersService.createProviders(providersDetails);
            res.status(200).json({ Operation: "Create Providers", Message: "Providers created successfully" });

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
const updateProviders = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        inBoundDetails = req.body;
        const result = await providersService.updateProviders(inBoundDetails);
        res.status(200).json({ message: `Update the Providers ${inBoundDetails.Id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});


const deleteProviders = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        console.log(req.params.id);
        const result = await providersService.deleteProviders(req.params.id);
        res.status(200).json({ message: `Delete the Providers ${req.params.id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

module.exports = { getProviders, getProvidersById, createProviders, updateProviders, deleteProviders };