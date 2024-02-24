const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const TbResponseLog = sequelize.define("tb_response_log", {
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }, primaryKey: true,
            autoIncrement: true
        },
        target_queue_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        name: {
            type: DataTypes.STRING,
            allownull: true
        },
        response_data: {
            type: DataTypes.TEXT,
            allownull: true
        },
        response_code: {
            type: DataTypes.STRING,
            allownull: true
        },
        message_ref_id: {
            type: DataTypes.STRING,
            allownull: true
        }
    });
    return TbResponseLog;
};