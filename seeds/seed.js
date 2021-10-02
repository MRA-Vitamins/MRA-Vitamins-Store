const sequelize = require('../config/connection');
// const { use } = require('../controllers/api/loginRoutes');
const { Vitamins, User } = require('../models');


const userData = require('./userData.json');

const vitaData = require('./vitamins.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    
    console.log(userData);
    console.log(vitaData);
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    // adding vitamins database 
    const vitamins = await Vitamins.bulkCreate(vitaData, {
        individualHooks: true,
        returning: true,
    })

    process.exit(0);
};

seedDatabase();