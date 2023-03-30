const router = require('express').Router();
const { Workout } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
    try {
        const workoutData = await Workout.create({
            ...req.body,
            user_id: req.session.user_id,
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
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!worKoutData) {
            res.status(404).json({ message: 'No workout found with this id!' });
            return;
        }

        res.status(200).json(worKoutData);
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;