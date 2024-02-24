const asyncHandler = require("express-async-handler");
const inBoundService = require("../services/inBoundServices");
const tokenService=require("../middleware/tokenHandler");

//Get all the patients
const getInBounds = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await inBoundService.GetInBounds();
        res.status(200).json({ Operation: "Get all the inbounds", result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Get Patient By Id
const getInBoundsById = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await inBoundService.getInBoundById(req.params.inBoundId);
        res.status(200).json({ Operation: `Get the Inbound`, result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Create patient
const createInBounds = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        inBoundDetails = req.body;
        if (inBoundDetails.Id) {
            const result = await inBoundService.createInBound(inBoundDetails);
            res.status(200).json({ Operation: "Create InBound", Message: "InBound created successfully" });

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
const updateInBounds = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        inBoundDetails = req.body;
        const result = await inBoundService.updateInBound(inBoundDetails);
        res.status(200).json({ message: `Update the InBound ${inBoundDetails.Id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});


const deleteInBounds = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        console.log(req.params.id);
        const result = await inBoundService.deleteInBound(req.params.id);
        res.status(200).json({ message: `Delete the InBound ${req.params.id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

module.exports = { getInBounds, createInBounds, deleteInBounds, updateInBounds, getInBoundsById };