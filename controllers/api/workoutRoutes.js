const router = require('express').Router();
const { Workout } = require('../../models');
const withAuth = require('../../utils/auth');

// route to GET a workout by its ID
router.get('/:id', async (req, res) => {
    try {
        const workoutData = await Workout.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!workoutData) {
            res.status(404).json({ message: `Workout ID ${req.params.id} not found` });
        } else {
            res.status(200).json(workoutData);
        }
        console.log(workoutData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const workoutData = await Workout.create({
            ...req.body
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