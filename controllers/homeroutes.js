const router = require('express').Router();
const {Restaurants, MenuItem} = require('./../models');

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response

  try {
    const data = await Restaurants.findAll()

    const rests = data.map((rest) => rest.get({plain: true}))


    //firstRest:rests[0] could be use
    res.render('homepage' , {rests} );
    console.log(rests)
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }


  // res.render('homepage');
});

router.get("/login" , async (req,res) => {
    res.render('login')
})

module.exports = router;
