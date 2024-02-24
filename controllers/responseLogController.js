const asyncHandler = require("express-async-handler");
const ResponseLogService = require("../services/responseLogServices");
const tokenService=require("../middleware/tokenHandler");

//Get all the patients
const getResponseLog = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await ResponseLogService.GetResponseLog();
        res.status(200).json({ Operation: "Get all the ResponseLog", result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Get Patient By Id
const getResponseLogById = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await ResponseLogService.getResponseLogById(req.body.ResponseLogId);
        res.status(200).json({ Operation: `Get the ResponseLog`, result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Create patient
const createResponseLog = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        if (req.body.Id) {
            const result = await ResponseLogService.createResponseLog(req.body);
            res.status(200).json({ Operation: "Create ResponseLog", Message: "ResponseLog created successfully" });
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
const updateResponseLog = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        inBoundDetails = req.body;
        const result = await ResponseLogService.updateResponseLog(inBoundDetails);
        res.status(200).json({ message: `Update the ResponseLog ${inBoundDetails.Id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});


const deleteResponseLog = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        console.log(req.params.id);
        const result = await ResponseLogService.deleteResponseLog(req.params.id);
        res.status(200).json({ message: `Delete the ResponseLog ${req.params.id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

module.exports = { getResponseLog, getResponseLogById, createResponseLog, updateResponseLog, deleteResponseLog };