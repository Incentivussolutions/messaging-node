const { Sequelize, DataTypes } = require('sequelize')
module.exports = (sequelize, Sequelize) => {
    const contact = sequelize.define("contact", {
        ContactId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            },primaryKey: true
        },
        RelationShipId: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        FlatNo: {
            type: DataTypes.STRING,
            allowNull: true
           
        },
        Street: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        City: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        State: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        Country: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        }
    });
    return contact;
}