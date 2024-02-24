const templateConfigRepo = require("../repository/templateConfigRepository");

async function getTemplateConfig()
{
    console.log("Service: GetTemplateConfig Initiated");
    return await templateConfigRepo.getTemplateConfig();
}
async function getTemplateConfigById(TemplateConfigId)
{
    console.log("Service: GetTemplateConfigById Initiated");
    return await templateConfigRepo.getTemplateConfigById(TemplateConfigId);
}
async function createTemplateConfig(templateConfig)
{
    console.log("Service: CreateTemplateConfig Initiated");
    return await templateConfigRepo.createTemplateConfig(templateConfig);
}
async function updateTemplateConfig(TemplateConfigId)
{
    console.log("Service: UpdateTemplateConfig Initiated");
    return await templateConfigRepo.updateTemplateConfig(TemplateConfigId);
}
async function deleteTemplateConfig(TemplateConfigId)
{
    console.log("Service: DeleteTemplateConfig Initiated");
    return await templateConfigRepo.deleteTemplateConfig(TemplateConfigId);
}
async function getTemplateConfigByTemplateId(TemplateId)
{
    console.log("Service: getTemplateConfigByTemplateId Initiated");
    return await templateConfigRepo.getTemplateConfigByTemplateId(TemplateId);
}

module.exports={getTemplateConfig,getTemplateConfigById,createTemplateConfig,updateTemplateConfig,deleteTemplateConfig,getTemplateConfigByTemplateId}