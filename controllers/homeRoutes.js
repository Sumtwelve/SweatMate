const router = require('express').Router();
const { User, Workout } = require('../models/');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    res.render('landing-page', {page_title: "SweatMate | Fitness for Fitness' Sake"})
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to /profile
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login', { logged_in: req.session.logged_in });
});


router.get('/workout/:id', async (req, res) => {
    try {
        const workoutData = await Workout.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const Workout = workoutData.get({ plain: true });

        res.render('workouts', {
            ...Workout,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Workout }],
        });

        const user = userData.map((data) => data.get({ plain: true }));
        
        const workouts = await Workout.findAll({
            where: {
                user_id: req.session.user_id
            }
        });

        res.render('profile', {
            ...user,
            logged_in: true,
            workouts: workouts
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router