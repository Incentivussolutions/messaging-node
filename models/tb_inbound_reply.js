const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const TbInboundReply = sequelize.define("tb_inbound_reply", {
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }, primaryKey: true,
            autoIncrement: true
        },
        inbound_id: {
            type: DataTypes.INTEGER,
            allownull: true
        },
        phone_no: {
            type: DataTypes.STRING,
            allownull: true
        },
        sender_id: { type: DataTypes.STRING, allowNull: true },
        template_id: { type: DataTypes.STRING, allowNull: true },
        reply_text: { type: DataTypes.STRING, allowNull: true },
        message_ref_id: { type: DataTypes.STRING, allowNull: true }
    });
    return TbInboundReply;
};