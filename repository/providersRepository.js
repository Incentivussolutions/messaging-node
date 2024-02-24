const database = require("../Helpers/ormConnection");
const tbProviders = database.templateDB.tbProviders;
const op = database.templateDB.Sequelize.op;

async function createProviders(providers) {
    console.log("Repo: Create Providers");
    console.log(providers);
    await tbProviders.create(providers);
}
async function updateProviders(providers) {
    console.log("Repo: Update Providers");
    tbProviders.update(providers, { where: { Id: providers.Id } });
}
async function getProviders() {
    console.log("Repo: Get all the Providers");
    return tbProviders.findAll();;
}
async function getProvidersById(providersId) {
    console.log("Repo: Get Providers by id");
    return tbProviders.findAll({
        where: { Id: providersId }
    });
}
async function deleteProviders(providersId) {
    console.log("Repo: Delete Providers");
    return tbProviders.destroy({ where: { Id: providersId } });
}
module.exports = { createProviders, updateProviders, getProviders, getProvidersById, deleteProviders };