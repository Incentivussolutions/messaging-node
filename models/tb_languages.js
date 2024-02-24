const { Sequelize, DataTypes } = require('sequelize');
const { tbTemplateConfig } = require('../models/tb_template_config');
module.exports = (sequelize, Sequelize) => {
    const TbLanguages = sequelize.define("tb_languages", {
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }, primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allownull: true
        },
        code: {
            type: DataTypes.STRING,
            allownull: true
        },
        status: {
            type: DataTypes.TINYINT,
            allownull: true
        }
    });
   
    // TbLanguages.associate = models => {
    //     TbLanguages.belongsTo(models.Table_B, { as: 'tb' });
    // }
    
    return TbLanguages;
};