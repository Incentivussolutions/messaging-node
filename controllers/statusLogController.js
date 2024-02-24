const asyncHandler = require("express-async-handler");
const StatusLogService = require("../services/statusLogService");
const tokenService=require("../middleware/tokenHandler");

//Get all the patients
const getStatusLog = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await StatusLogService.getStatusLog();
        res.status(200).json({ Operation: "Get all the StatusLog", result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Get Patient By Id
const getStatusLogById = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await StatusLogService.getStatusLogById(req.body.StatusLogId);
        res.status(200).json({ Operation: `Get the StatusLog`, result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Create patient
const createStatusLog = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        if (req.body.Id) {
            const result = await StatusLogService.createStatusLog(req.body);
            res.status(200).json({ Operation: "Create StatusLog", Message: "StatusLog created successfully" });

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
const updateStatusLog = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        inBoundDetails = req.body;
        const result = await StatusLogService.updateStatusLog(inBoundDetails);
        res.status(200).json({ message: `Update the StatusLog ${inBoundDetails.Id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});


const deleteStatusLog = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        console.log(req.params.id);
        const result = await StatusLogService.deleteStatusLog(req.params.id);
        res.status(200).json({ message: `Delete the StatusLog ${req.params.id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

module.exports = { getStatusLog, getStatusLogById, createStatusLog, updateStatusLog, deleteStatusLog };