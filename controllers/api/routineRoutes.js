const router = require('express').Router();
const { Routine } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
        try {
            const routineData = await Routine.findAll({
                where: {
                    user_id: req.session.user_id
                }
            });

            if (!routineData) {
                res.status(400).json({ message: 'Could not fetch any routine data for this user' });
            } else {
                res.status(200).json(routineData);
            }
        
        } catch (err) {
            res.status(400).json(err);
        }


});

router.get('/:id', withAuth, async (req, res) => {
    try {
        const routineData = await Routine.findByPk(req.params.id);

        if (!routineData) {
            res.status(404).json({ message: `404: Cannot find routine of id ${req.params.id}` });
        } else {
            res.status(200).json(routineData);
        }
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const routineData = await Routine.create({
            ...req.body,
            user_id: req.session.user_id
        })
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;