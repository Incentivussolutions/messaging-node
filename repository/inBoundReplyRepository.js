const database = require("../Helpers/ormConnection");
const tbInBoundReply = database.templateDB.tbInBoundReply;
const op = database.templateDB.Sequelize.op;

async function createInBoundReply(inBound) {
    console.log("Repo: Create InBoundReply");
    console.log(inBound);
    await tbInBoundReply.create(inBound);
}
async function updateInBoundReply(inBound) {
    console.log("Repo: Update InBoundReply");
    tbInBoundReply.update(inBound, { where: { Id: inBound.Id } });
}
async function getInBoundReply() {
    console.log("Repo: Get all the InBoundReply");
    return tbInBoundReply.findAll();;
}
async function getInBoundReplyById(InBoundId) {
    console.log("Repo: Get InBoundReply by id");
    return tbInBoundReply.findAll({
        where: { Id: InBoundId }
    });
}
async function deleteInBoundReply(InBoundId) {
    console.log("Repo: Delete InBoundReply");
    return tbInBoundReply.destroy({ where: { Id: InBoundId } });
}
module.exports = { createInBoundReply, updateInBoundReply, getInBoundReply, getInBoundReplyById, deleteInBoundReply };