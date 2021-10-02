const router = require('express').Router();
const { User } = require('../../models');


// *api/register
router.post('/register', async (req, res) => {
    try {
        const userData = await User.create(
            {
                username: req.body.username,
                email: req.body.email,
                pass: req.body.pass
            }
        );

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.user_name = userData.username;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// *api/login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
        
        //   if (!userData) {
            //       console.log("reaching here");
            //     res
            //       .status(400)
            //       .json({ message: 'Incorrect email or password, please try again' });
            //     return;
            //   }
            
            const validPassword = await userData.checkPassword(req.body.pass);
            console.log(req.body, userData, validPassword);
  
    //   if (!validPassword) {
    //     res
    //       .status(400)
    //       .json({ message: 'Incorrect email or password, please try again' });
    //     return;
    //   }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.status(200).json({ user: userData, message: 'You are now logged in!' });
    });
  
    } catch (err) {
    console.log(err);
      res.status(400).json(err);
    }
  });
// *api/logout

module.exports = router;