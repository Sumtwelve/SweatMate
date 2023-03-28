const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Routine extends Model {}

Routine.init(
    {
        routine_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        do_day: {
            type: DataTypes.STRING,
            allowNull: false
        },
        custom_color: {
            type: DataTypes.STRING // a string to hold a hex-code color to personalize the look of the routine
        },
        date_created:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'routine',
    }
);

module.exports = Routine;