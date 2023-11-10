const {Comment} = require('../models')
const commentData = 
[
    {
        id:1,
        user_id: 1,
        comment_text: "This is amazing dish i ever had!",
        menu_item_id:1,
    },
    {
        id:2,
        user_id: 2,
        comment_text: "Fantastic!",
        menu_item_id:2
    },
    {
        id:3,
        user_id: 3,
        comment_text: "Will come back again",
        menu_item_id: 3
    },
  
];
const commentSeed = () => Comment.bulkCreate(commentData);

module.exports = commentSeed;