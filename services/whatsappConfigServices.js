const whatsappConfigRepo = require("../repository/whatsappconfigRepository");

async function getWhatsappConfig()
{
    console.log("Service: GetwhatsappConfig Initiated");
    return await whatsappConfigRepo.getWhatsappConfig();
}
async function getWhatsappConfigById(whatsappConfigId)
{
    console.log("Service: GetwhatsappConfigById Initiated");
    return await whatsappConfigRepo.getWhatsappConfigById(whatsappConfigId);
}
async function createWhatsappConfig(whatsappConfigRepo)
{
    console.log("Service: CreatewhatsappConfig Initiated");
    return await whatsappConfigRepo.createwhatsappConfiga(whatsappConfigRepo);
}
async function updateWhatsappConfig(whatsappConfigId)
{
    console.log("Service: UpdatewhatsappConfig Initiated");
    return await whatsappConfigRepo.updateWhatsappConfig(whatsappConfigId);
}
async function deleteWhatsappConfig(whatsappConfigId)
{
    console.log("Service: DeletewhatsappConfig Initiated");
    return await whatsappConfigRepo.deleteWhatsappConfig(whatsappConfigId);
}

module.exports={getWhatsappConfig,getWhatsappConfigById,createWhatsappConfig,updateWhatsappConfig,deleteWhatsappConfig}      