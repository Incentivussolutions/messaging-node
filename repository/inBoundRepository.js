const database = require("../Helpers/ormConnection");
const tbdbBound = database.templateDB.tbInBound;
const op = database.templateDB.Sequelize.op;

async function createInBound(inBound) {
    console.log("Repo: Create InBound");
    console.log(inBound);
    await tbdbBound.create(inBound);
}
async function updateInBound(inBound) {
    console.log("Repo: Update InBound");
    tbdbBound.update(inBound, { where: { Id: inBound.Id } });
}
async function getInBounds() {
    console.log("Repo: Get all the InBound");
    return tbdbBound.findAll();;
}
async function getInBoundById(InBoundId) {
    console.log("Repo: Get InBound by id");
    return tbdbBound.findAll({
        where: { Id: InBoundId }
    });
}
async function deleteInBound(InBoundId) {
    console.log("Repo: Delete InBound");
    return tbdbBound.destroy({ where: { Id: InBoundId } });
}
module.exports = { createInBound, updateInBound, getInBounds, getInBoundById, deleteInBound };