const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const TbTargetQueue = sequelize.define("tb_target_queue", {
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }, primaryKey: true,
            autoIncrement: true,
        },
        auth_key: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone_no: {
            type: DataTypes.STRING,
            allownull: true
        },
        request_data: {
            type: DataTypes.TEXT,
            allownull: true
        },
        send_status: {
            type: DataTypes.TINYINT,
            allownull: true
        }
    });
    return TbTargetQueue;
};