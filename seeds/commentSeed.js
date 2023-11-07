const {Comment} = require('../models')
const commentData = 
[
    {
        "user_id": 1,
        "comment_text": "This is amazing dish i ever had!"
    },
    {
        "user_id": 5,
        "comment_text": "Great taste!"
    },
    {
        "user_id": 1,
        "comment_text": "Awesome ambience"
    },
    {
        "user_id": 2,
        "comment_text": "Fantastic!"
    },
    {
        "user_id": 3,
        "comment_text": "Will come back again"
    }
  
]

const commentSeed = () => Comment.beforeBulkCreate(commentData);
module.exports = commentSeed;