const router = require('express').Router();
const mainPage = require ('./../views/layouts/main.handlebars')

router.get('/', async (req,res) => {
    try {
            if (req.session.countVisit) {
                req.session.countVisit++
            }else {
                req.session.countVisit = 1;
            }
// Above counts visits.
            req.session.save(() => {
                res.status(200).send(`Number of visits: ${req.session.countVisit}`);
            })
            // Above sends a status to check on countVisits. Mainly for dev use.
} catch (err) {
    res.status(500).send('An error occurred');
}
});

module.exports = router;

// Store local data in the above, cookies, login validation etc.