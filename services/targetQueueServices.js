const targetQueueRepo = require("../repository/targetQueueRepository");

async function getTargetQueue()
{
    console.log("Service: GetQueueRepo Initiated");
    return await targetQueueRepo.getTargetQueue();
}
async function getTargetQueueById(QueueRepoId)
{
    console.log("Service: GetTargetQueueById Initiated");
    return await targetQueueRepo.getTargetQueueById(TargetQueueRepoId);
}
async function createTargetQueue(TargetQueue)
{
    console.log("Service: CreateQueueRepo Initiated");
    return await targetQueueRepo.createTargetQueue(TargetQueue);
}
async function updateTargetQueue(TargetQueueRepoId)
{
    console.log("Service: UpdateQueueRepo Initiated");
    return await targetQueueRepo.updateTargetQueue(TargetQueueRepoId);
}
async function deleteTargetQueue(QueueRepoId)
{
    console.log("Service: DeleteQueueRepo Initiated");
    return await targetQueueRepo.deleteTargetQueue(QueueRepoId);
}

module.exports={getTargetQueue,getTargetQueueById,createTargetQueue,updateTargetQueue,deleteTargetQueue}