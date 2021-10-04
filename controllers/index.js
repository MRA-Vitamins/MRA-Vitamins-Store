// const router = require('express').Router();

// // Import routes for login, homepage, ...

// const apiRoutes = require('./api/loginRoutes');
// const mainRoutes = require('./mainRoutes');

// // Assign routes for login, main ....

// router.use('/api', apiRoutes);
// router.use('/', mainRoutes);

// module.exports = router;

// 
const router = require('express').Router();

const apiRoutes = require('./api');
const mainRoutes = require('./mainRoutes');
const vitaminRoutes = require('./vitaminRoutes')

router.use('/', mainRoutes);
router.use('/api', apiRoutes);
router.use('/product', vitaminRoutes);

module.exports = router;