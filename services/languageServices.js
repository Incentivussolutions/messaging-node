const languageRepo = require("../repository/LanguagesRepository");

async function GetLanguages()
{
    console.log("Service: GetLanguages Initiated");
    return await languageRepo.getLanguages();
}
async function getLanguageById(LanguagesId)
{
    console.log("Service: GetLanguagesById Initiated");
    return await languageRepo.getLanguagesById(LanguagesId);
}
async function createLanguage(Languages)
{
    console.log("Service: CreateLanguage Initiated");
    return await languageRepo.createLanguage(Languages);
}
async function updateLanguage(Languages)
{
    console.log("Service: updatelanguage Initiated");
    return await languageRepo.updatelanguage(Languages);
}
async function deleteLanguages(LanguagesId)
{
    console.log("Service: DeleteLanguages Initiated");
    return await languageRepo.deleteLanguages(LanguagesId);
}

module.exports={GetLanguages,getLanguageById,createLanguage,updateLanguage,deleteLanguages}