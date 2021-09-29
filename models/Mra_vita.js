const sequelize = require('sequelize');
const db = require('../config/connection');

const Users = db.define('users', {
    username: {
        type: sequelize.STRING
    },
    email: {
        type: sequelize.STRING
    }
});

const Vitamins = db.define('vitamins', {
    label: {
        type: sequelize.STRING
    },
    origin: {
        type: sequelize.STRING
    },
    quantity: {
        type: sequelize.INTEGER
    },
    price: {
        type: sequelize.INTEGER
    }
});

module.exports = Users;
// module.exports = Vitamins;