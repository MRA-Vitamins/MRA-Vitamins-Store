const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

// Use withAuth middleware to prevent access to route
router.get('/', async (req, res) => {
  res.render('main', { layout: 'index' });
});

router.get('/signup', async (req, res) => {
  res.render('signup', { layout: 'index' });
});

router.get('/login', async (req, res) => {
  res.render('login', { layout: 'index' });
});

router.get('/profile', async (req, res) => {
  res.render('profile', { layout: 'index' });
});

router.get('/cart', async (req, res) => {
  res.render('cart', { layout: 'index' });
});

router.get('/product', async (req, res) => {
  res.render('product', { layout: 'index' });
});

router.get('/details', async (req, res) => {
  res.render('details', { layout: 'index' });
});


router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
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

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
