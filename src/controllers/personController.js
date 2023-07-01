const Person = require('../models/person')

function createView(req, res){
    res.render("person/create.html", {});
}

function createPerson(req, res){
    let person = {
        name: req.body.name,
        cpf: req.body.cpf,
        birth_date: req.body.birth_date,
        phone: req.body.phone,
        address: req.body.address,
        cep: req.body.cep
    }
    
    Person.create(person).then((result)=>{
        res.render("person/create.html", {person});
    }).catch((err) => {
        console.log(err)
        let error = err
        res.render("person/create.html", {error});
    })
}

// function readView(req, res){
//     let success_delete = req.query.success_delete
//     let error_delete = req.query.error_delete

//     Person.findAll().then((people)=>{
//         res.render("person/read.html", {people,success_delete,error_delete});
//     }).catch((err) => {
//         console.log(err)
//         let error = err
//         res.render("person/read.html", {error});
//     })
// }

// function updateView(req, res){
//     let id = req.params.id
//     let person;
//     Person.findByPk(id).then(function(person){
//         res.render("person/update.html", {person});
//     })
// }

// function updatePerson(req, res) {
//     let person = {
//         name: req.body.name,
//         cpf: req.body.cpf,
//         birth_date: req.body.birth_date,
//         phone: req.body.phone,
//         address: req.body.address,
//         cep: req.body.cep
//     }
//     Person.update(
//       person,
//       {
//         where: {
//           id: req.body.id,
//         },
//       }
//     ).then(function (success) {
//         res.render("person/update.html", {person, success});
//     })
//     .catch(function (error) {
//         res.render("person/update.html", {person, error})
//     });
// }

// function deleteView(req, res){
//     let id = req.params.id
//     let personDeleted
//     Person.findByPk(id).then((personDeleted)=>{
//         res.render("person/delete.html", {personDeleted});
//     })
// }

// function deletePerson(req, res) {
//     Person.destroy(
//       {
//         where: {
//           id: req.body.id,
//         },
//       }
//     ).then(function (success) {
//         res.render("person/delete.html", {success});
//     })
//     .catch(function (error) {
//         res.render("person/delete.html", {error})
//     });
// }

module.exports =  {
    createView,
    createPerson,
    // readView,
    // updateView,
    // updatePerson,
    // deleteView,
    // deletePerson
};