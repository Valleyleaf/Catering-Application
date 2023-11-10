const router = require('express').Router();
const {model} = require('../../models');

router.post('/comments', async (req, res) => {
  try {
    const commentData = await model.Commentseed(); 
    if (!commentData) {
      return res.status(404).json({ message: 'comment data not found' });
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// I want this route to return comment data.
module.exports = router;