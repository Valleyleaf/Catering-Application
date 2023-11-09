const router = require('express').Router();

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
        console.log(err)
    }
module.exports = router;
})