const Person = require('../models/person')

function loginView(req, res){
    person = req.session.person
    res.render("login.html", {person});
}

async function authenticate(req, res) {
    const person = await Person.findOne({ where: { name: req.body.name, cpf: req.body.cpf} });
    if (person !== null) {    
        req.session.authorized = true
        req.session.person = person
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
