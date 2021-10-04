// const express = require('express');
// const router = express.Router();
// const db = require('../config/connection');
// const MRA = require('../models/Mra_vita');

// router.get('/', (req, res) => MRA.findAll()
//     .then(mra_vita => {
//         console.log(mra_vita)
//         res.sendStatus(200);
//     })
//     .catch(err => console.log(err))
// );

const router = require('express').Router();
const userRoutes = require('./loginRoutes');

router.use('/', userRoutes);


module.exports = router;