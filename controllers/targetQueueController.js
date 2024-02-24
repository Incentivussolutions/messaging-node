const asyncHandler = require("express-async-handler");
const targetQueueServices = require("../services/targetQueueServices");
const tokenService=require("../middleware/tokenHandler");

//Get all the patients
const getTargetQueue = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await targetQueueServices.getTargetQueue();
        res.status(200).json({ Operation: "Get all the TargetQueue", result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Get Patient By Id
const getTargetQueueById = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await targetQueueServices.getTargetQueueById(req.body.TargetQueueId);
        res.status(200).json({ Operation: `Get the TargetQueue`, result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Create patient
const createTargetQueue = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        if (req.body.Id) {
            const result = await targetQueueServices.createTargetQueue(req.body);
            res.status(200).json({ Operation: "Create TargetQueue", Message: "TargetQueue created successfully" });

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
const updateTargetQueue = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        inBoundDetails = req.body;
        const result = await targetQueueServices.updateTargetQueue(inBoundDetails);
        res.status(200).json({ message: `Update the TargetQueue ${inBoundDetails.Id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

const deleteTargetQueue = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        console.log(req.params.id);
        const result = await targetQueueServices.deleteTargetQueue(req.params.id);
        res.status(200).json({ message: `Delete the TargetQueue ${req.params.id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

module.exports = { getTargetQueue, getTargetQueueById, createTargetQueue, updateTargetQueue, deleteTargetQueue };