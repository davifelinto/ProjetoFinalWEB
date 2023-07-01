const User = require('../models/user')
const Person = require('../models/person')

function createView(req, res){
    res.render("person/createPersonUser.html", {});
}

function createPersonUser(req, res){
    let person = {
        name: req.body.name,
        cpf: req.body.cpf,
        birth_date: req.body.birth_date,
        phone: req.body.phone,
        address: req.body.address,
        cep: req.body.cep
    }
    let user = {
        email: req.body.email,
        password: req.body.pwd
    }
    
    Person.create(person).then((result)=>{
        User.create(user).then((result2)=>{
            res.render("person/createPersonUser.html", {person}, {user});
        }).catch((err) => {
            console.log(err)
            let error = err
            res.render("person/createPersonUser.html", {error});
        })
    }).catch((err) => {
        console.log(err)
        let error = err
        res.render("person/create.html", {error});
    })
}

module.exports =  {
    createView,
    createPersonUser,
    // readView,
    // updateView,
    // updateUser,
    // deleteUser
};