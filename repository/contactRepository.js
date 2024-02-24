const database=require("../Helpers/ormConnection");
const dbContact=database.templateDB.contacts;
const op=database.templateDB.Sequelize.op;

async function createContact(contact)
{
    console.log("Repo: Create Contact");
   
    console.log(input);
   await dbContact.create(input);
}

async function updateContact(contact)
{
    console.log("Repo: Update Contact");
    contact.update(contact,{where:{ContactId:contact.ContactId}});
}

module.exports={createContact,updateContact};