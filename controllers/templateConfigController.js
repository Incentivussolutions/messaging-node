const asyncHandler = require("express-async-handler");
const templateConfigServices = require("../services/templateConfigServices");
const tokenService=require("../middleware/tokenHandler");

//Get all the patients
const getTemplateConfig = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await templateConfigServices.getTemplateConfig();
        res.status(200).json({ Operation: "Get all the TemplateConfig", result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Get Patient By Id
const getTemplateConfigById = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await templateConfigServices.getTemplateConfigById(req.body.TemplateConfigId);
        res.status(200).json({ Operation: `Get the TemplateConfig`, result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Create patient
const createTemplateConfig = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        if (req.body.Id) {
            const result = await templateConfigServices.createTemplateConfig(req.body);
            res.status(200).json({ Operation: "Create TemplateConfig", Message: "TemplateConfig created successfully" });

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
const updateTemplateConfig = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        inBoundDetails = req.body;
        const result = await templateConfigServices.updateTemplateConfig(inBoundDetails);
        res.status(200).json({ message: `Update the TemplateConfig ${inBoundDetails.Id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

const deleteTemplateConfig = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        console.log(req.params.id);
        const result = await templateConfigServices.deleteTemplateConfig(req.params.id);
        res.status(200).json({ message: `Delete the TemplateConfig ${req.params.id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

module.exports = { getTemplateConfig, getTemplateConfigById, createTemplateConfig, updateTemplateConfig, deleteTemplateConfig };