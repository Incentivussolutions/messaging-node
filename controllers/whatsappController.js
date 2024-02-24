const asyncHandler = require("express-async-handler");
const whatsappConfigureServices = require("../services/whatsappConfigServices");
const tokenService=require("../middleware/tokenHandler");

//Get all the patients
const getWhatsappConfigure = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await whatsappConfigureServices.getWhatsappConfig();
        res.status(200).json({ Operation: "Get all the whatsappConfigure", result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Get Patient By Id
const getWhatsappConfigureById = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await whatsappConfigureServices.getWhatsappConfigById(req.body.WhatsappConfigureId);
        res.status(200).json({ Operation: `Get the whatsappConfigure`, result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Create patient
const createWhatsappConfigure = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        if (req.body.Id) {
            const result = await whatsappConfigureServices.createWhatsappConfig(req.body);
            res.status(200).json({ Operation: "Create whatsappConfigure", Message: "whatsappConfigure created successfully" });

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
const updateWhatsappConfigure = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        inBoundDetails = req.body;
        const result = await whatsappConfigureServices.updateWhatsappConfig(inBoundDetails);
        res.status(200).json({ message: `Update the whatsappConfigure ${inBoundDetails.Id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

const deleteWhatsappConfigure = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        console.log(req.params.id);
        const result = await whatsappConfigureServices.deleteWhatsappConfig(req.params.id);
        res.status(200).json({ message: `Delete the whatsappConfigure ${req.params.id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

module.exports = {
    getWhatsappConfigure, getWhatsappConfigureById, createWhatsappConfigure,
    updateWhatsappConfigure, deleteWhatsappConfigure
};