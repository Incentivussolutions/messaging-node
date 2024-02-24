const templateHeaderRepo = require("../repository/templateHeaderRepository");

async function getTemplateHeader()
{
    console.log("Service: GetTemplateHeader Initiated");
    return await templateHeaderRepo.getTemplateHeader();
}
async function getTemplateHeaderById(templateHeaderId)
{
    console.log("Service: GetTemplateHeaderById Initiated");
    return await templateHeaderRepo.getTemplateHeaderById(templateHeaderId);
}
async function createTemplateHeader(TemplateHeader)
{
    console.log("Service: CreateTemplateHeader Initiated");
    return await templateHeaderRepo.createTemplateHeader(TemplateHeader);
}
async function updateTemplateHeader(templateHeaderId)
{
    console.log("Service: UpdateTemplateHeader Initiated");
    return await templateHeaderRepo.updateTemplateHeader(templateHeaderId);
}
async function deleteTemplateHeader(templateHeaderId)
{
    console.log("Service: DeleteTemplateHeader Initiated");
    return await templateHeaderRepo.deleteTemplateHeader(templateHeaderId);
}
async function getTemplateHeaderByTemplateId(templateId)
{
    console.log("Service: Get TemplateHeader By TemplateId Initiated");
    return await templateHeaderRepo.getTemplateHeaderByTemplateId(templateId);
}
module.exports={getTemplateHeader,getTemplateHeaderById,createTemplateHeader,updateTemplateHeader,deleteTemplateHeader,getTemplateHeaderByTemplateId}