const router = require('express').Router();
<<<<<<< HEAD


router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage');
});

router.get("/login" , async (req,res) => {
    res.render('login')
})

module.exports = router;
=======
const mainPage = require ('./../views/layouts/main.handlebars')

router.get('/', async (req,res) => {
    try {
        req.session.save(() => {
            if (req.session.countVisit) {
                req.session.countVisit++
            }else {
                req.session.countVisit = 1;
            }
        }) 
} catch (err) {
    console.log(err);
}
   
})
>>>>>>> origin/main
