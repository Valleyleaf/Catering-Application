const router = require('express').Router();
const {model} = require('../../models');

router.post('/comments', async (req, res) => {
  try {
    // Assuming you have a function to retrieve data from the seed or database
    const commentData = await model.getcommentSeed(); // Replace with your actual function

    if (!commentData) {
      return res.status(404).json({ message: 'comment data not found' });
    }

    res.status(200).json(commentuData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;