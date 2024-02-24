const clientRepo = require("../repository/clientsRepository");

async function GetClients()
{
    console.log("Service: Get Clients Initiated");
    return await clientRepo.getClient();
}
async function getClientsById(clientID)
{
    console.log("Service: GetClientByID Initiated");
    return await clientRepo.getClientById(clientID);
}
async function createClient(Client)
{
    console.log("Service: Create Client Initiated");
    return await clientRepo.createClient(Client);
}
async function updateClient(Client)
{
    console.log("Service: Update Client Initiated");
    return await clientRepo.updateClient(Client);
}
async function deleteClient(clientId)
{
    console.log("Service: Delete Client Initiated");
    return await clientRepo.deleteclient(clientId);
}
async function getClientByKey(clientID)
{
    console.log("Service: GetClientByID Initiated");
    return await clientRepo.getClientByKey(clientID);
}
module.exports={GetClients,getClientsById,createClient,updateClient,deleteClient,getClientByKey}