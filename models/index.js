const User = require('./User');
const Routine = require('./Routine');
const Workout = require('./Workout');

User.hasMany(Routine, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Routine.belongsTo(User, {
    foreignKey: 'user_id'
});

Routine.hasMany(Workout, {
    foreignKey: 'routine_id',
    onDelete: 'CASCADE'
});

Workout.belongsTo(Routine, {
    foreignKey: 'routine_id'
});

module.exports = { User, Routine, Workout };
