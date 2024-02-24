const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const TbTemplateFooter = sequelize.define("tb_template_footer", {
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }, primaryKey: true
        },
        template_id: {
            type: DataTypes.SMALLINT,
            allowNull: true
        },
        cta_button: {
            type: DataTypes.STRING,
            allownull: true
        },
        cta_link: {
            type: DataTypes.STRING,
            allownull: true
        },
        sub_type: {
            type: DataTypes.STRING,
            allownull: true
        }
    });
    return TbTemplateFooter;
};