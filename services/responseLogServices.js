const responseLogRepo = require("../repository/responseLogRepository");

async function GetResponseLog()
{
    console.log("Service: GetResponseLog Initiated");
    return await responseLogRepo.getResponseLog();
}
async function getResponseLogById(ResponseLogId)
{
    console.log("Service: GetResponseLogById Initiated");
    return await responseLogRepo.getResponseLogById(ResponseLogId);
}
async function createResponseLog(ResponseLog)
{
    console.log("Service: CreateResponseLog Initiated");
    return await responseLogRepo.createResponseLog(ResponseLog);
}
async function updateResponseLog(ResponseLogId)
{
    console.log("Service: UpdateResponseLog Initiated");
    return await responseLogRepo.updateResponseLog(ResponseLogId);
}
async function deleteResponseLog(ResponseLogId)
{
    console.log("Service: DeleteResponseLog Initiated");
    return await responseLogRepo.deleteResponseLog(ResponseLogId);
}

module.exports={GetResponseLog,getResponseLogById,createResponseLog,updateResponseLog,deleteResponseLog}