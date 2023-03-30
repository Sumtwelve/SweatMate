const router = require('express').Router();
const { Workout } = require('../../models');
const withAuth = require('../../utils/auth');

// route to GET all workouts that belong to a certain Routine ID
router.get('/:routineID', withAuth, async (req, res) => {
    try {
        const workoutData = await Workout.findAll({
            where: {
                routine_id: req.params.routineID
            }
        })
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const workoutData = await Workout.create({
            ...req.body
            // routine_id will be passed in with req.body when the page script calls the POST method
        });

        res.status(200).json(workoutData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const workoutData = await Workout.destroy({
            where: {
                id: req.params.id
            },
        });

        if (!workoutData) {
            res.status(404).json({ message: `No workout found with the id ${req.params.id}` });
            return;
        }

        res.status(200).json(workoutData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;