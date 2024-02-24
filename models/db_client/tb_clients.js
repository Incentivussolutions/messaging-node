const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const TbClients = sequelize.define("tb_clients", {
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }, primaryKey: true
        },
        client_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        client_db: {
            type: DataTypes.STRING,
            allownull: true
        },
        client_authkey: {
            type: DataTypes.STRING,
            allownull: true
        },
        client_status: {
            type: DataTypes.TINYINT,
            allownull: true
        },
        created_by: {
            type: DataTypes.INTEGER,
            allownull: true
        },
        updated_by: {
            type: DataTypes.INTEGER,
            allownull: true
        }, createdAt: {
            type: DataTypes.DATE,
            allownull: true,
            field:`created_at`
        },
        updatedAt: {
            type: DataTypes.DATE,
            allownull: true,
            field:`updated_at`
        }
    },
    {
        timeStamps: false
    });
    return TbClients;
};