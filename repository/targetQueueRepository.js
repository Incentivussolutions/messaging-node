const database = require("../Helpers/ormConnection");
const tbTargetQueue = database.templateDB.tbTargetQueue;
const op = database.templateDB.Sequelize.op;

async function createTargetQueue(TargetQueue) {
    console.log("Repo: Create TargetQueue");
    console.log(TargetQueue);
    await tbTargetQueue.create(TargetQueue);
}
async function updateTargetQueue(TargetQueue) {
    console.log("Repo: Update TargetQueue");
    tbTargetQueue.update(TargetQueue, { where: { Id: TargetQueue.Id } });
}
async function getTargetQueue() {
    console.log("Repo: Get all the TargetQueue");
    return tbTargetQueue.findAll();;
}
async function getTargetQueueById(TargetQueueId) {
    console.log("Repo: Get TargetQueue by id");
    return tbTargetQueue.findAll({
        where: { Id: TargetQueueId }
    });
}
async function deleteTargetQueue(TargetQueueId) {
    console.log("Repo: Delete TargetQueue");
    return tbTargetQueue.destroy({ where: { Id: TargetQueueId } });
}
module.exports = { createTargetQueue, updateTargetQueue, getTargetQueue, getTargetQueueById, deleteTargetQueue };