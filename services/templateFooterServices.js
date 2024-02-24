const templateFooterRepo = require("../repository/templateFooterRepository");

async function getTemplateFooter()
{
    console.log("Service: GetTemplateFooter Initiated");
    return await templateFooterRepo.getTemplateFooter();
}
async function getTemplateFooterById(templateFooterId)
{
    console.log("Service: GetTemplateFooterById Initiated");
    return await templateFooterRepo.getTemplateFooterById(templateFooterId);
}
async function getTemplateFooterByTemplateId(templateId)
{
    console.log("Service: GetTemplateFooterByTemplateId Initiated");
    return await templateFooterRepo.getTemplateFooterByTemplateId(templateId);
}
async function createTemplateFooter(templateFooterRepo)
{
    console.log("Service: CreateTemplateFooter Initiated");
    return await templateFooterRepo.createTemplateFooter(templateFooterRepo);
}
async function updateTemplateFooter(templateFooterId)
{
    console.log("Service: UpdateTemplateFooter Initiated");
    return await templateFooterRepo.updateTemplateFooter(templateFooterId);
}
async function deleteTemplateFooter(templateFooterId)
{
    console.log("Service: DeleteTemplateFooter Initiated");
    return await templateFooterRepo.deleteTemplateFooter(templateFooterId);
}

module.exports={getTemplateFooter,getTemplateFooterById,createTemplateFooter,updateTemplateFooter,deleteTemplateFooter,getTemplateFooterByTemplateId}