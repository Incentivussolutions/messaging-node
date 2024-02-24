const database = require("../Helpers/ormConnection");
const tbStatusLog = database.templateDB.tbStatusLog;
const op =database.templateDB.Sequelize.op;

async function createStatusLog(StatusLog) {
    console.log("Repo: Create StatusLog");
    console.log(StatusLog);
    await tbStatusLog.create(StatusLog);
}
async function updateStatusLog(StatusLog) {
    console.log("Repo: Update StatusLog");
    tbStatusLog.update(StatusLog, { where: { Id: StatusLog.Id } });
}
async function getStatusLog() {
    console.log("Repo: Get all the StatusLog");
    return tbStatusLog.findAll();;
}
async function getStatusLogById(StatusLogId) {
    console.log("Repo: Get StatusLog by id");
    return tbStatusLog.findAll({
        where: { Id: StatusLogId }
    });
}
async function deleteStatusLog(StatusLogId) {
    console.log("Repo: Delete StatusLog");
    return tbStatusLog.destroy({ where: { Id: StatusLogId } });
}
module.exports = { createStatusLog, updateStatusLog, getStatusLog, getStatusLogById, deleteStatusLog };