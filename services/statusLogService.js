const statusLogRepo = require("../repository/statusLogRepository");

async function getStatusLog()
{
    console.log("Service: GetStatusLog Initiated");
    return await statusLogRepo.getStatusLog();
}
async function getStatusLogById(StatusLogId)
{
    console.log("Service: GetStatusLogById Initiated");
    return await statusLogRepo.getStatusLogById(StatusLogId);
}
async function createStatusLog(StatusLog)
{
    console.log("Service: CreateStatusLog Initiated");
    return await statusLogRepo.createStatusLog(StatusLog);
}
async function updateStatusLog(StatusLogId)
{
    console.log("Service: UpdateStatusLog Initiated");
    return await statusLogRepo.updateStatusLog(StatusLogId);
}
async function deleteStatusLog(StatusLogId)
{
    console.log("Service: DeleteStatusLog Initiated");
    return await statusLogRepo.deleteStatusLog(StatusLogId);
}

module.exports={getStatusLog,getStatusLogById,createStatusLog,updateStatusLog,deleteStatusLog}