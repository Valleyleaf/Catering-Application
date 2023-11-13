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
    //firstRest:rests[0] could be use
    res.render('homepage' , {
        rests,
        logged_in: req.session.logged_in});
    // console.log(rests)
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }


  // res.render('homepage');
});


router.get('/package' , async (req,res) => {
  
  try{
    const data = await Restaurants.findAll()
    const rests = data.map((rest) => rest.get({plain: true}))
    //firstRest:rests[0] could be use
    res.render('homepage' , {rests } );
    // console.log(rests)
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
    

   
    const revs = revData.map((rev) => rev.get({plain:true}))
    const rest = data.get({plain:true});


    console.log("User ids",revs);
    res.render('package' , {rest: rest , revs:revs, name: req.session.name} );
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.get('/profile' , withAuth, async (req,res) => {

  const userData = req.session.user_id;
  const user = await User.findByPk(userData)
  const name = user.name;
  console.log(userData);
  
  res.render('profile',{name});
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