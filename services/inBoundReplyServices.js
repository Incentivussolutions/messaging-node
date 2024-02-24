const inBoundReplyRepo = require("../repository/inBoundReplyRepository");

async function GetInBoundReply()
{
    console.log("Service: GetInBoundsReply Initiated");
    return await inBoundReplyRepo.getInBoundReply();
}
async function getInBoundReplyById(inBoundId)
{
    console.log("Service: GetInBoundReplyById Initiated");
    return await inBoundReplyRepo.getInBoundReplyById(inBoundReplyId);
}
async function createInBoundReply(inBoundReply)
{
    console.log("Service: CreateInBound Initiated");
    return await inBoundReplyRepo.createInBoundReply(inBoundReply);
}
async function updateInBoundReply(inBoundReplyId)
{
    console.log("Service: UpdateInBoundReply Initiated");
    return await inBoundReplyRepo.updateInBoundReply(inBoundReplyId);
}
async function deleteInBoundReply(inBoundReplyId)
{
    console.log("Service: DeleteInBoundReply Initiated");
    return await inBoundReplyRepo.deleteInBoundReply(inBoundReplyId);
}

module.exports={GetInBoundReply,getInBoundReplyById,createInBoundReply,updateInBoundReply,deleteInBoundReply}