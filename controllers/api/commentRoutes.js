const router = require('express').Router();
const { Comment } = require('../../models')
const { User } = require('../../models');
const withAuth = require ('../../utils/authen');

router.get('/', async (req, res) => {
  try {
    const comments = await Comment.findAll({
      include: User, // Include the User model to fetch user information for each comment
    });
    res.json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//create a route to create a new comment

router.post('/', async (req, res) => {
    const { user_id, comment_text } = req.body;
  
    try {
      const user = await User.findByPk(user_id);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const comment = await Comment.create({ 
        ...req.body,
        user_id, comment_text });
      res.json(comment);
    } catch (error) {
      console.error(err);
      res.status(500).json(err);
    }
  });

  // route to update a existing comment

  router.put('/:id', async (req, res) => {
    const commentId = req.params.id;
    const { comment_text } = req.body;
  
    try {
      const comment = await Comment.findByPk(commentId);
  
      if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
      }
  
      comment.comment_text = comment_text;
      await comment.save();
  
      res.json(comment);
    } catch (error) {
      console.error(err);
      res.status(500).json(err);
    }
  });
  
  //route to delete the comment by its id

  router.delete('/:id', async (req, res) => {
    const commentId = req.params.id;
  
    try {
      const comment = await Comment.findByPk(commentId);
  
      if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
      }
  
      await comment.destroy();
      res.json({ message: 'Comment deleted' });
    } catch (error) {
      console.error(err);
      res.status(500).json();
    }
  });

  module.exports = router;