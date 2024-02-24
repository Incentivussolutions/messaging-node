const asyncHandler = require("express-async-handler");
const inBoundReplyService = require("../services/inBoundReplyServices");
const tokenService=require("../middleware/tokenHandler");

//Get all the patients
const getInBoundReplys = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await inBoundReplyService.GetInBoundReply();
        res.status(200).json({ Operation: "Get all the inBoundReply", result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Get Patient By Id
const getInBoundsReplyById = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await inBoundReplyService.getInBoundReplyById(req.params.inBoundId);
        res.status(200).json({ Operation: `Get the InboundReply`, result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Create patient
const createInBoundsReply = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        inBoundDetails = req.body;
        if (inBoundDetails.Id) {
            const result = await inBoundReplyService.createInBoundReply(inBoundDetails);
            res.status(200).json({ Operation: "Create InBoundReply", Message: "InBoundReply created successfully" });

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
const updateInBoundsReply = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        inBoundDetails = req.body;
        const result = await inBoundReplyService.updateInBoundReply(inBoundDetails);
        res.status(200).json({ message: `Update the InBoundReply ${inBoundDetails.Id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});


const deleteInBoundsReply = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        console.log(req.params.id);
        const result = await inBoundReplyService.deleteInBoundReply(req.params.id);
        res.status(200).json({ message: `Delete the InBoundReply ${req.params.id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

module.exports = { getInBoundReplys, getInBoundsReplyById, createInBoundsReply, updateInBoundsReply, deleteInBoundsReply };