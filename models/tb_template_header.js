const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const TbTemplateHeader = sequelize.define("tb_template_header", {
        Id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                notEmpty: false
            }, primaryKey: true
        },
        template_id: {
            type: DataTypes.SMALLINT,
            allowNull: true
        },
        header_type: {
            type: DataTypes.TINYINT,
            allownull: true
        },
        header_text: {
            type: DataTypes.STRING,
            allownull: true
        },
        header_file_type: {
            type: DataTypes.STRING,
            allownull: true
        },
        header_url: {
            type: DataTypes.STRING,
            allownull: true
        },
        header_file: {
            type: DataTypes.STRING,
            allownull: true
        }
    });
    return TbTemplateHeader;
};