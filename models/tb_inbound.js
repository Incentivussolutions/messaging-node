const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const InBound = sequelize.define("tb_inbound", {
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }, primaryKey: true
        },
        phone_no: {
            type: DataTypes.STRING,
            allownull: true
        },
        sender_id: {
            type: DataTypes.STRING,
            allownull: true
        },
        requested_text: { type: DataTypes.STRING, allowNull: true },
        requested_data: { type: DataTypes.STRING, allowNull: true },
        message_ref_id: { type: DataTypes.STRING, allowNull: true },
        message_type: { type: DataTypes.STRING, allowNull: true }
    });
    return InBound;
};