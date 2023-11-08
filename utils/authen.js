const withAuth = (req, res, next) => {
//if user not logged in, redirect the request to the login route
    if(!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports - withAuth;