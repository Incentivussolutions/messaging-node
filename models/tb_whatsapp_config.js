const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const ToWhatsappConfig = sequelize.define("tb_whatsapp_config", {
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }, primaryKey: true
        },
        account_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        provider: {
            type: DataTypes.TINYINT,
            allownull: true
        },
        sender_id: {
            type: DataTypes.STRING,
            allownull: true
        },
        application_id: {
            type: DataTypes.STRING,
            allownull: true
        },
        api_key: {
            type: DataTypes.STRING,
            allownull: true
        },
        api_secret: {
            type: DataTypes.STRING,
            allownull: true
        },
        key_file: {
            type: DataTypes.STRING,
            allownull: true
        },
        status: {
            type: DataTypes.TINYINT,
            allownull: true
        }
    });
    return ToWhatsappConfig;
};