const User = require('./User');
const Workout = require('./Workout');

User.hasMany(Workout, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Workout.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Workout };
