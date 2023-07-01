const User = require('../models/user')
const Person = require('../models/person')

function createView(req, res){
    res.render("personUser/createPersonUser.html", {});
}

async function createPersonUser(req, res){
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
    await Person.create(person).catch((err) => {
            console.log(err)
            let error = err
            res.render("personUser/createPersonUser.html", {error});
    })
    
    User.create(user).then((result)=>{
        res.render("personUser/createPersonUser.html", {person});
    }).catch((err) => {
        console.log(err)
        let error = err
        res.render("personUser/createPersonUser.html", {error});
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