const User = require('../models/user')

function loginView(req, res){
    user = req.session.user
    res.render("login.html", {user});
}

async function authenticate(req, res) {
    const user = await User.findOne({ where: { email: req.body.email, password: req.body.pwd} });
    if (user !== null) {    
        req.session.authorized = true
        req.session.user = user
        res.redirect('/')
    } else {
        let authentication_error = true
        res.render('login.html', {authentication_error})
    }
}

function exit(req, res) {
    req.session.destroy(function(err) {
        console.log('User unauthorized')
     })
     let exit_success = true
     res.render('login.html', {exit_success})
}

function verifiyAuthentication(req, res, next) {
    if (req.session.authorized){
        console.log('User authorized')
        next(res.render('home.html'))
    }
    else{
        console.log('User NOT authorized')
        res.redirect('/index')
    }
}

module.exports =  {
    loginView,
    authenticate,
    verifiyAuthentication,
    exit
};
