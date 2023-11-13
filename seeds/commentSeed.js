const {Comment} = require('../models')
const commentData = 
[
    {
        user_id: 1,
        user_name : "Maximillion",
        comment_text: "This is amazing dish i ever had!",
        package_id:1,
    },
    {
        user_id: 1,
        user_name : "Yoda",
        comment_text: "BeepBop",
        package_id:1,
    },
    {
        user_id: 2,
        user_name : "Darth vader",
        comment_text: "Fantastic!",
        package_id:2
    },
    {
        user_id: 3,
        user_name : "Luke",
        comment_text: "Will come back again",
        package_id: 3
    },
  
];
const commentSeed = () => Comment.bulkCreate(commentData);

module.exports = commentSeed;