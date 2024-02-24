const database = require("../Helpers/ormConnection");
const tbTemplateFooter = database.templateDB.tbTemplateFooter;
const op = database.templateDB.Sequelize.op;

async function createTemplateFooter(TemplateFooter) {
    console.log("Repo: Create TemplateFooter");
    console.log(TemplateFooter);
    await tbTemplateFooter.create(TemplateFooter);
}
async function updateTemplateFooter(TemplateFooter) {
    console.log("Repo: Update TemplateFooter");
    tbTemplateFooter.update(TemplateFooter, { where: { Id: TemplateFooter.Id } });
}
async function getTemplateFooter() {
    console.log("Repo: Get all the TemplateFooter");
    return tbTemplateFooter.findAll();;
}
async function getTemplateFooterById(TemplateFooterId) {
    console.log("Repo: Get TemplateFooter by id");
    return tbTemplateFooter.findAll({
        where: { Id: TemplateFooterId }
    });
}
async function getTemplateFooterByTemplateId(TemplateId) {
    console.log("Repo: Get TemplateFooter by id");
    return tbTemplateFooter.findAll({
        where: { template_id: TemplateId }
    });
}
async function deleteTemplateFooter(TemplateFooterId) {
    console.log("Repo: Delete TemplateFooter");
    return tbTemplateFooter.destroy({ where: { Id: TemplateFooterId } });
}
module.exports = { createTemplateFooter, updateTemplateFooter, getTemplateFooter,getTemplateFooterByTemplateId, getTemplateFooterById, deleteTemplateFooter,};