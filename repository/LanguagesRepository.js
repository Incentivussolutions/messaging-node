const database = require("../Helpers/ormConnection");
const tbLanguages = database.templateDB.tbLanguages;
const op = database.templateDB.Sequelize.op;

async function createLanguage(language) {
    console.log("Repo: Create Languages");
    console.log(language);
    await tbLanguages.create(language);
}
async function updatelanguage(language) {
    console.log("Repo: Update Languages");
    tbLanguages.update(language, { where: { Id: language.Id } });
}
async function getLanguages() {
    console.log("Repo: Get all the Languages");
    return tbLanguages.findAll();;
}
async function getLanguagesById(LanguageId) {
    console.log("Repo: Get Languages by id");
    return tbLanguages.findAll({
        where: { Id: LanguageId }
    });
}
async function deleteLanguages(LanguageId) {
    console.log("Repo: Delete Languages");
    return tbLanguages.destroy({ where: { Id: LanguageId } });
}
module.exports = { createLanguage, updatelanguage, getLanguages, getLanguagesById, deleteLanguages };