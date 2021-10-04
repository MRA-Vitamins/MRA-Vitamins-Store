// REFACTOR TO WORK WITH OUR WEBSITE
const router = require('express').Router();
const { Vitamins } = require('../models');

router.get('/', async (req, res) => {
    try {
      // Get all vitamins 
      const productData = await Vitamins.findAll({

      });
  
      // Serialize data so the template can read it
      const products = productData.map((vitamins) => vitamins.get({ plain: true }));
      console.log(products);
      // Pass serialized data into template
      res.render('product', { 
        vitamins: products, 
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;