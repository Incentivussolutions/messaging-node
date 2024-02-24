const database = require("../Helpers/ormConnection");
const tbResponseLog = database.templateDB.tbResponseLog;
const op = database.templateDB.Sequelize.op;

async function createResponseLog(ResponseLog) {
    console.log("Repo: Create ResponseLog");
    console.log(ResponseLog);
    await tbResponseLog.create(ResponseLog);
}
async function updateResponseLog(ResponseLog) {
    console.log("Repo: Update ResponseLog");
    tbResponseLog.update(ResponseLog, { where: { Id: ResponseLog.Id } });
}
async function getResponseLog() {
    console.log("Repo: Get all the ResponseLog");
    return tbResponseLog.findAll();;
}
async function getResponseLogById(ResponseLogId) {
    console.log("Repo: Get ResponseLog by id");
    return tbResponseLog.findAll({
        where: { Id: ResponseLogId }
    });
}
async function deleteResponseLog(ResponseLogId) {
    console.log("Repo: Delete ResponseLog");
    return tbResponseLog.destroy({ where: { Id: ResponseLogId } });
}
module.exports = { createResponseLog, updateResponseLog, getResponseLog, getResponseLogById, deleteResponseLog };