const asyncHandler = require("express-async-handler");
const templateHeaderServices = require("../services/templateHeaderServices");
const tokenService=require("../middleware/tokenHandler");

//Get all the patients
const getTemplateHeader = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await templateHeaderServices.getTemplateHeader();
        res.status(200).json({ Operation: "Get all the TemplateHeader", result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Get Patient By Id
const getTemplateHeaderById = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await templateHeaderServices.getTemplateHeaderById(req.body.TemplateHeaderId);
        res.status(200).json({ Operation: `Get the TemplateHeader`, result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Create patient
const createTemplateHeader = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        if (req.body.Id) {
            const result = await templateHeaderServices.createTemplateHeader(req.body);
            res.status(200).json({ Operation: "Create TemplateHeader", Message: "TemplateHeader created successfully" });

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
const updateTemplateHeader = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        inBoundDetails = req.body;
        const result = await templateHeaderServices.updateTemplateHeader(inBoundDetails);
        res.status(200).json({ message: `Update the TemplateHeader ${inBoundDetails.Id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

const deleteTemplateHeader = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        console.log(req.params.id);
        const result = await templateHeaderServices.deleteTemplateHeader(req.params.id);
        res.status(200).json({ message: `Delete the TemplateHeader ${req.params.id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

module.exports = { getTemplateHeader, getTemplateHeaderById, createTemplateHeader, updateTemplateHeader, deleteTemplateHeader };