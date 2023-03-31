const router = require('express').Router();
const { User } = require('../../models');

// route to GET all users
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// GET route for getting the user id
router.get('/id', async (req, res) => {
    try {
        console.log(req.session.user_id);
        res.status(200).json(req.session);
    } catch (err) {
        res.status(400).json(err);
    }
});

// route to create a new user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = req.body.name;
            req.session.logged_in = true;

            console.log(req.session);

            res.status(200).json(userData);
        });

        console.log(req.session);
    } catch (err) {
        res.status(400).json(err);
    }
});

// route to log in a user
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        // The await here has no effect. Ternary operator used to force the code to
        // wait for User.findOne() above to finish.
        const validPassword = await userData.checkPassword(req.body.password)
        ? 
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = req.body.name;
            req.session.logged_in = true;

            res.status(200).json(userData);
            
        })
        :
        res.status(400).json({ message: 'Incorrect email or password, please try again' });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


module.exports = router;