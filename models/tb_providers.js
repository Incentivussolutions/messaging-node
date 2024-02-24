const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const TbProviders = sequelize.define("tb_providers", {
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }, primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allownull: true
        },
        status: {
            type: DataTypes.TINYINT,
            allownull: true
        }
    });
    return TbProviders;
};