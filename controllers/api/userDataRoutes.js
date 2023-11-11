const router = require('express').Router();
const {User} = require('../../models');

router.post('/login', async (req, res) => {
  
  try {
    
    const userData = await User.findOne({ where: { email: req.body.email } }); 
    
    if (!userData) {
      return res.status(404).json({ message: 'user data not found' });
    }

    const validPassword = await userData.checkPassword(req.body.password)

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

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

// I want this route to return comment data.
module.exports = router;