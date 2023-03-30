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
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        do_day: {
            type: DataTypes.STRING,
            allowNull: false
        }, // CHANGE: Added workouts array, will store workout id's directly onto the Routine entries in the db
        workouts: {
            type: DataTypes.ARRAY,
            allowNull: true
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