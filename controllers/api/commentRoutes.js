const router = require('express').Router();
const { json } = require('express');
const {Comment} = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userInfoString = `{
      "user_id":${req.session.user_id},
      "user_name":"${req.session.name}",
      "comment_text":"${req.body.comment_text}",
      "package_id":${req.body.package_id},
      "package_name":"${req.body.package_name}"
  }`



const userJson = JSON.parse(userInfoString);
  console.log(userInfoString);
  // const userInfoString = JSON.stringify(userInfoObj)
  const commentData = await Comment.create(userJson); 

    
    if (!commentData) {
      return res.status(404).json({ message: 'comment data not found' });
    }
    res.json(commentData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
});

router.get('/', async (req, res) => { //This route is for testing purposes to see if the comment was posted
  try {
    const commentData = await Comment.findAll(); 
    
    // if (!commentData) {
    //   ;
    // }
    res.json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/', async (req,res) => {
  
  const data = await Comment.findByPk(req.body.id)
  data.destroy();
  
  res.json("Comment deleted");
})


// I want this route to return comment data.
module.exports = router;