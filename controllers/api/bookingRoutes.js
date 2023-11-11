const router = require('express').Router();
const {model} = require('../../models');


router.get('/', async (req, res) => {
  db.query('SELECT * FROM Restaurants', (err, results) =>
  {
    if (err) throw err;
    res.json(results);
    console.log('>>>>>>>>>>>>>>This is bookings results:', results)
  })
});

router.post('/addToCart', (req, res) => {
  const { id, cartItems, Date, orderID} = req.body;
})
// req.body requests information from the body.

module.exports = router;