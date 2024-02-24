const database = require("../Helpers/ormConnection");
const tbTemplateHeader = database.templateDB.tbTemplateHeader;
const op = database.templateDB.Sequelize.op;

async function createTemplateHeader(TemplateHeader) {
    console.log("Repo: Create TemplateHeader");
    console.log(TemplateHeader);
    await tbTemplateHeader.create(TemplateHeader);
}
async function updateTemplateHeader(TemplateHeader) {
    console.log("Repo: Update TemplateHeader");
    tbTemplateHeader.update(TemplateHeader, { where: { Id: TemplateHeader.Id } });
}
async function getTemplateHeader() {
    console.log("Repo: Get all the TemplateHeader");
    return tbTemplateHeader.findAll();;
}
async function getTemplateHeaderById(TemplateHeaderId) {
    console.log("Repo: Get TemplateHeader by id");
    return tbTemplateHeader.findAll({
        where: { Id: TemplateHeaderId }
    });
}
async function deleteTemplateHeader(TemplateHeaderId) {
    console.log("Repo: Delete TemplateHeader");
    return tbTemplateHeader.destroy({ where: { Id: TemplateHeaderId } });
}
async function getTemplateHeaderByTemplateId(TemplateId) {
    console.log("Repo: Get TemplateHeader by Template id");
    return tbTemplateHeader.findAll({
        where: { template_id: TemplateId }
    });
}
module.exports = { createTemplateHeader, updateTemplateHeader, getTemplateHeader, 
    getTemplateHeaderById, deleteTemplateHeader ,getTemplateHeaderByTemplateId};