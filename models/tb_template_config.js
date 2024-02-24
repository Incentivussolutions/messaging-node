const { Sequelize, DataTypes } = require('sequelize');
const  TbLanguages  = require('../models/tb_languages');
module.exports = ( Sequelize) => {
    const TbTemplateConfig = Sequelize.define("tb_template_config", {
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }, primaryKey: true,
            autoIncrement: true
        },
        template_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        template_type: {
            type: DataTypes.TINYINT,
            allownull: true
        },
        template_id: {
            type: DataTypes.STRING,
            allownull: false
        },
        template_key: {
            type: DataTypes.STRING,
            allownull: true
        },
        template_provider_id: {
            type: DataTypes.STRING,
            allownull: true
        },
        whatspp_config_id: {
            type: DataTypes.SMALLINT,
            allownull: true
        },
        language_id: {
            type: DataTypes.INTEGER,
            allownull: true
        },
        template_content: {
            type: DataTypes.TEXT,
            allownull: true
        },
        footer_text: {
            type: DataTypes.STRING,
            allownull: true
        },
        status: {
            type: DataTypes.TINYINT,
            allownull: true
        }
    });
   
     return TbTemplateConfig;
};