const router = require('express').Router();
const {User} = require('../../models');

router.post('/login', async (req, res) => {
  
  try {
    
    const userData = await User.findOne({ where: { email: req.body.email } }); 
    
    if (!userData) {
      return res.status(404).json({ message: 'user data not found' });
    }
    res.status(200).json(userData);

    const validPassword = await userData.checkPassword(req.body.password)

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

  } catch (err) {
    res.status(400).json(err);
  }



});

// I want this route to return comment data.
module.exports = router;