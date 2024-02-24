const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const TbUsers = sequelize.define("tb_users", {
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }, primaryKey: true,
            autoIncrement: true
        },
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING,
            allownull: true
        },
        lastname: {
            type: DataTypes.STRING,
            allownull: true
        },
        email: {
            type: DataTypes.STRING,
            allownull: true
        },
        username: {
            type: DataTypes.STRING,
            allownull: true
        },
        password: {
            type: DataTypes.STRING,
            allownull: true
        },
        user_type: {
            type: DataTypes.TINYINT,
            allownull: true
        },
        status: {
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
        }
    });
    return TbUsers;
};