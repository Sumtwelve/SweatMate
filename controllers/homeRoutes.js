const router = require('express').Router();
const User = require('../models/');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {

    // Get all projects and JOIN with user data
    res.render('homepage')

});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
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

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router