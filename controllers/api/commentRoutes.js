const router = require('express').Router();
const { json } = require('express');
const {Comment} = require('../../models');


// req.session.user_id = userData.id;
//       req.session.logged_in = true;
//       req.session.name = userData.name;

router.post('/', async (req, res) => {
  try {
    const userInfoString = `{
      "user_id":${req.session.user_id},
      "user_name":"${req.session.name}",
      "comment_text":"${req.body.comment_text}",
      "package_id":${req.body.package_id}
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


// I want this route to return comment data.
module.exports = router;