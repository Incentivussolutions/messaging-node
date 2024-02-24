const { Sequelize, DataTypes } = require('sequelize')
const dotenv=require("dotenv").config();
const envVar=process.env;

// Create an instance of sequelize
const sequelize =
    new Sequelize(envVar.MYSQLDATABASE,
        envVar.MYSQLUSER,
        envVar.MYSQLPASSWORD, {
        host: envVar.MYSQLHOST,
        dialect: 'mysql'
    })

    sequelize
    .authenticate()
    .then(() => console.log('Successfully connected to the database!'))
    .catch((error) => console.log('Failed to connect the database:', error))

   const templateDB={};
   templateDB.sequelize=sequelize;
   templateDB.Sequelize=Sequelize;
   
   const clientSequelize =
    new Sequelize(envVar.MYSQLCLIENTDATABASE,
        envVar.MYSQLUSER,
        envVar.MYSQLPASSWORD, {
        host: envVar.MYSQLHOST,
        dialect: 'mysql'
    })
    clientSequelize
    .authenticate()
    .then(() => console.log('Successfully connected to the database!'))
    .catch((error) => console.log('Failed to connect the database:', error))

   const clientDB={};
   clientDB.clientSequelize=clientSequelize;
   clientDB.Sequelize=Sequelize;
   
//    mapping
templateDB.contacts=require("../models/contacts.js")(sequelize,Sequelize);

templateDB.tbInBound=require("../models/tb_inbound.js")(sequelize,Sequelize);
templateDB.tbInBoundReply=require("../models/tb_inbound_reply.js")(sequelize,Sequelize);
templateDB.tbLanguages=require("../models/tb_languages.js")(sequelize,Sequelize);
templateDB.tbProviders=require("../models/tb_providers.js")(sequelize,Sequelize);
templateDB.tbResponseLog=require("../models/tb_response_log.js")(sequelize,Sequelize);
templateDB.tbStatusLog=require("../models/tb_status_log.js")(sequelize,Sequelize);
templateDB.tbTargetQueue=require("../models/tb_target_queue.js")(sequelize,Sequelize);
templateDB.tbTemplateConfig=require("../models/tb_template_config.js")(sequelize,Sequelize);
templateDB.tbTemplateFooter=require("../models/tb_template_footer.js")(sequelize,Sequelize);
templateDB.tbTemplateHeader=require("../models/tb_template_header.js")(sequelize,Sequelize);
templateDB.tbUsers=require("../models/tb_users.js")(sequelize,Sequelize);
templateDB.tbWhatsappConfig=require("../models/tb_whatsapp_config.js")(sequelize,Sequelize);

//Associations

//TemplateConfig table
templateDB.tbTemplateConfig.hasOne(templateDB.tbLanguages,{foreignKey:"id",as:"Language"});
templateDB.tbLanguages.belongsTo(templateDB.tbTemplateConfig,{foreignKey:"id",as:"Template"});

templateDB.tbTemplateConfig.hasOne(templateDB.tbWhatsappConfig,{foreignKey:"id",as:"WhatsappConfig"});
templateDB.tbWhatsappConfig.belongsTo(templateDB.tbTemplateConfig,{foreignKey:"id",as:"Template"});

clientDB.tbClient=require("../models/db_client/tb_clients.js")(clientSequelize,Sequelize);

module.exports={templateDB,clientDB};