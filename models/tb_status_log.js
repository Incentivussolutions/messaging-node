const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const TbStatusLog = sequelize.define("tb_status_log", {
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }, primaryKey: true,
            autoIncrement: true,
            autoIncrement: true
        },
        message_ref_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status_code: {
            type: DataTypes.TINYINT,
            allownull: true
        },
        status_date: {
            type: DataTypes.DATE,
            allownull: true
        },
        rejected_reason: {
            type: DataTypes.STRING,
            allownull: true
        }
    });
    return TbStatusLog;
};