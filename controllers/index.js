const router = require('express').Router();

// Import routes for login, homepage, ...

const apiRoutes = require('./api/loginRoutes');
const mainRoutes = require('./mainRoutes');

// Assign routes for login, main ....

router.use('/api', apiRoutes);
router.use('/', mainRoutes);

module.exports = router;