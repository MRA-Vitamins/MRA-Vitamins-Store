const router = require('express').Router();

router.get('/', (req, res) => {
    try {
        res.render('main');
    } catch (err) {
        res.json(err)
    }
});

module.exports = router;