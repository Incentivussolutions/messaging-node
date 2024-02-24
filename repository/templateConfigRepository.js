const database = require("../Helpers/ormConnection");
const tbTemplateConfig = database.templateDB.tbTemplateConfig;
const tbLanguages = database.templateDB.tbLanguages;
const tbWhatsappConfig = database.templateDB.tbWhatsappConfig;
const op = database.templateDB.Sequelize.op;

async function createTemplateConfig(TemplateConfig) {
    console.log("Repo: Create TemplateConfig");
    console.log(TemplateConfig);
    await tbTemplateConfig.create(TemplateConfig);
}
async function updateTemplateConfig(TemplateConfig) {
    console.log("Repo: Update TemplateConfig");
    tbTemplateConfig.update(TemplateConfig, { where: { Id: TemplateConfig.Id } });
}
async function getTemplateConfig() {
    console.log("Repo: Get all the TemplateConfig");
    return tbTemplateConfig.findAll();
}
async function getTemplateConfigById(TemplateConfigId) {
    console.log("Repo: Get TemplateConfig by id: "+TemplateConfigId );
    console.log(tbLanguages);
    return tbTemplateConfig.findAll({
        include:[
            {
                model:tbLanguages,
                as:"Language"
            }
        ],
        where: { Id: TemplateConfigId }
    });
}
  
async function deleteTemplateConfig(TemplateConfigId) {
    console.log("Repo: Delete TemplateConfig");
    return tbTemplateConfig.destroy({ where: { Id: TemplateConfigId } });
}
async function getTemplateConfigByTemplateId(TemplateId) {
    console.log("Repo: Get TemplateConfig by id: "+TemplateId );
    console.log(tbLanguages);
    return tbTemplateConfig.findAll({
        include:[
            {
                model:tbLanguages,
                as:"Language"
            },
            {
                model:tbWhatsappConfig,
                as:"WhatsappConfig"
            }
        ],
        where: { template_id: TemplateId }
    });
}
module.exports = { createTemplateConfig, updateTemplateConfig, getTemplateConfig, getTemplateConfigById, deleteTemplateConfig,getTemplateConfigByTemplateId };