const asyncHandler = require("express-async-handler");
const templateFooterServices = require("../services/templateFooterServices");
const tokenService=require("../middleware/tokenHandler");

//Get all the patients
const getTemplateFooter = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await templateFooterServices.getTemplateFooter();
        res.status(200).json({ Operation: "Get all the TemplateFooter", result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Get Patient By Id
const getTemplateFooterById = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await templateFooterServices.getTemplateFooterById(req.body.TemplateFooterId);
        res.status(200).json({ Operation: `Get the TemplateFooter`, result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Create patient
const createTemplateFooter = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        if (req.body.Id) {
            const result = await templateFooterServices.createTemplateFooter(req.body);
            res.status(200).json({ Operation: "Create TemplateFooter", Message: "TemplateFooter created successfully" });

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
const updateTemplateFooter = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        inBoundDetails = req.body;
        const result = await templateFooterServices.updateTemplateFooter(inBoundDetails);
        res.status(200).json({ message: `Update the TemplateFooter ${inBoundDetails.Id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

const deleteTemplateFooter = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        console.log(req.params.id);
        const result = await templateFooterServices.deleteTemplateFooter(req.params.id);
        res.status(200).json({ message: `Delete the TemplateFooter ${req.params.id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

module.exports = { getTemplateFooter, getTemplateFooterById, createTemplateFooter, updateTemplateFooter, deleteTemplateFooter };