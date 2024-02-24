const database = require("../Helpers/ormConnection");
const tbWhatsappConfig = database.templateDB.tbWhatsappConfig;
const op = database.templateDB.Sequelize.op;

async function createWhatsappConfig(WhatsappConfig) {
    console.log("Repo: Create WhatsappConfig");
    console.log(WhatsappConfig);
    await tbWhatsappConfig.create(WhatsappConfig);
}
async function updateWhatsappConfig(WhatsappConfig) {
    console.log("Repo: Update WhatsappConfig");
    tbWhatsappConfig.update(WhatsappConfig, { where: { Id: WhatsappConfig.Id } });
}
async function getWhatsappConfig() {
    console.log("Repo: Get all the WhatsappConfig");
    return tbWhatsappConfig.findAll();;
}
async function getWhatsappConfigById(WhatsappConfigId) {
    console.log("Repo: Get WhatsappConfig by id");
    return tbWhatsappConfig.findAll({
        where: { Id: WhatsappConfigId }
    });
}
async function deleteWhatsappConfig(WhatsappConfigId) {
    console.log("Repo: Delete WhatsappConfig");
    return tbWhatsappConfig.destroy({ where: { Id: WhatsappConfigId } });
}
module.exports = { createWhatsappConfig, updateWhatsappConfig, getWhatsappConfig, getWhatsappConfigById, deleteWhatsappConfig };