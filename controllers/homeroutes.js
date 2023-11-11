const router = require('express').Router();
const {Restaurants, MenuItem, User} = require('./../models');
const withAuth = require("../utils/authen");
const { findByPk, findAll } = require('../models/User');

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
    let rest = data.get({plain:true})
    let restString = JSON.stringify(rest,null,2);
    const package_app = rest.package[0];
    res.render('package' , {rest: rest} );
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

router.get('/cart' , async (req,res) => {
  res.render('cart')
})

module.exports = router;