const router = require('express').Router();
const {Restaurants, MenuItem, User,Comment} = require('./../models');
const withAuth = require("../utils/authen");

router.use((req, res, next) => {
    res.locals.logged_in = req.session.logged_in;
    next();
  });

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response

  try {
    const data = await Restaurants.findAll()
    const rests = data.map((rest) => rest.get({plain: true}))
    res.render('homepage' , {
        rests,
        logged_in: req.session.logged_in});
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/package' , async (req,res) => {
  
  try{
    const data = await Restaurants.findAll()
    const rests = data.map((rest) => rest.get({plain: true}))
    res.render('homepage' , {rests } );
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})


router.get('/package/:id' , async (req,res) => {
  try{
    const data = await Restaurants.findByPk(req.params.id)
    const revData = await Comment.findAll({ where: { package_id: req.params.id } });
    const userData = req.session.user_id;
    const user = await User.findByPk(userData)
    let name;
      
      if (!req.session.logged_in) {
      name = "user"
    } else {
        name = user.name
    }

   
    const revs = revData.map((rev) => rev.get({plain:true}))
    const rest = data.get({plain:true});


    res.render('package' , {rest: rest , revs:revs, name :name} );
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.get('/profile' , withAuth, async (req,res) => {

  const userData = req.session.user_id;
  const user = await User.findByPk(userData)
  const name = user.name;
  const reviewData = await Comment.findAll({where : {user_id:userData}})
  const reviews = reviewData.map((review) => review.get({plain:true}))
  
  
  
  res.render('profile',{name,reviews});
})

router.get("/login" , async (req,res) => {
    res.render('login')
})


router.get("/signup" ,async (req,res) => {
  res.render('signup');
})

router.get('/cart' , async (req,res) => {
  res.render('cart')
})

module.exports = router;
