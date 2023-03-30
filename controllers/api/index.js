const router = require('express').Router();
const userRoutes = require('./userRoutes');
const routineRoutes = require('./routineRoutes')
const workoutRoutes = require('./workoutRoutes');

router.use('/users', userRoutes);
router.use('/routine/', routineRoutes);
router.use('/workout/', workoutRoutes);


module.exports = router;
