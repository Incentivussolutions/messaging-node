const database = require("../Helpers/ormConnection");
const tbClient = database.clientDB.tbClient;
const op = database.templateDB.Sequelize.op;

async function createClient(Client) {
    console.log("Repo: Create Client");
    console.log(Client);
    await tbClient.create(Client);
}
async function updateClient(Client) {
    console.log("Repo: Update Client");
    tbClient.update(Client, { where: { Id: Client.Id } });
}
async function getClient() {
    console.log("Repo: Get all the Client");
    return tbClient.findAll();
}
async function getClientById(ClientId) {
    console.log("Repo: Get Client by id: "+ClientId );
    return tbClient.findAll({
        where: { Id: ClientId }
    });
}
async function deleteClient(ClientId) {
    console.log("Repo: Delete Client");
    return tbClient.destroy({ where: { Id: ClientId } });
}
async function getClientByKey(AuthKey) {
    console.log("Repo: Get Client by AuthKey: "+AuthKey );
    return tbClient.findAll({
        where: { client_authkey: AuthKey }
    });
}
module.exports = { createClient, updateClient, getClient, getClientById, deleteClient,getClientByKey };