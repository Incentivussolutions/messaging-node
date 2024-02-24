const providersRepo = require("../repository/providersRepository");

async function GetProviders()
{
    console.log("Service: GetProviders Initiated");
    return await providersRepo.getProviders();
}
async function getProvidersById(providersId)
{
    console.log("Service: GetProvidersById Initiated");
    return await providersRepo.getProvidersById(providersId);
}
async function createProviders(providers)
{
    console.log("Service: CreateProviders Initiated");
    return await providersRepo.createProviders(providers);
}
async function updateProviders(providersId)
{
    console.log("Service: UpdateProviders Initiated");
    return await providersRepo.updateProviders(providersId);
}
async function deleteProviders(ProvidersId)
{
    console.log("Service: DeleteProviders Initiated");
    return await providersRepo.deleteProviders(ProvidersId);
}

module.exports={GetProviders,getProvidersById,createProviders,updateProviders,deleteProviders}