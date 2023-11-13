const {Comment} = require('../models')
const commentData = 
[
    {
        user_id: 1,
        user_name : "Sal",
        comment_text: "This is amazing dish i ever had!",
        package_id:1,
        package_name:"The Italiano",
    }
  
];
const commentSeed = () => Comment.bulkCreate(commentData);

module.exports = commentSeed;