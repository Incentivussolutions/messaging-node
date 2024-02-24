const inBoundRepo = require("../repository/inBoundRepository");

async function GetInBounds()
{
    console.log("Service: GetInBounds Initiated");
    return await inBoundRepo.getInBounds();
}
async function getInBoundById(inBoundId)
{
    console.log("Service: GetInBoundById Initiated");
    return await inBoundRepo.getInBoundById(inBoundId);
}
async function createInBound(inBound)
{
    console.log("Service: CreateInBound Initiated");
    return await inBoundRepo.createInBound(inBound);
}
async function updateInBound(inBoundId)
{
    console.log("Service: UpdateInBound Initiated");
    return await inBoundRepo.updateInBound(inBoundId);
}
async function deleteInBound(inBoundId)
{
    console.log("Service: DeleteInBound Initiated");
    return await inBoundRepo.deleteInBound(inBoundId);
}

module.exports={GetInBounds,getInBoundById,createInBound,updateInBound,deleteInBound}