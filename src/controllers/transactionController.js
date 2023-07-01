const Transaction = require('../models/transaction')
const Account = require('../models/account')

function createView(req, res){
    res.render("transaction/create.html", {});
}

function createTransaction(req, res){
    let date = new Date()
    let transaction = {
        type: req.body.type,
        date: date.toISOString(),
        value: req.body.value,
        account_origin: req.body.account_origin,
        account_destiny: req.body.account_destiny,
        obs: req.body.obs
    }
    // Account.findBy(number, orig_number).then((account)=>{})
    Transaction.create(transaction).then((result)=>{
        res.render("transaction/createTransaction.html", {transaction});
    }).catch((err) => {
        console.log(err)
        let error = err
        res.render("transaction/createTransaction.html", {error});
    })
}

function readView(req, res){
    let success_delete = req.query.success_delete
    let error_delete = req.query.error_delete

    Transaction.findAll().then((transactions)=>{
        res.render("transaction/read.html", {transactions, success_delete, error_delete})
    }).catch((err)=> {
        console.log(err)
        let error = err
        res.render("transaction/read.html", {error})
    })
}

// function updateView(req, res){
//     let id = req.params.id
//     let transaction
//     Transaction.findByPk(id).then(function(transaction){
//         res.render("transaction/update.html", {transaction})
//     })
// }

// function updateTransaction(req, res){
//     let transaction = {
//         type: req.body.type,
//         date: req.body.date,
//         value: req.body.value,
//         account_origin: req.body.account_origin,
//         account_destiny: req.body.account_destiny,
//         obs: req.body.obs
//     }
//     Transaction.update(
//         transaction,
//         {
//             where: {
//                 id: req.body.id
//             },
//         }
//     ).then(function (success) {
//         res.render("transaction/update.html", {transaction, success})
//     }).catch(function (error) {
//         res.render("transaction/update.html", {transaction, error})
//     })
// }

// function deleteTransaction(req, res) {
//     Transaction.destroy(
//       {
//         where: {
//           id: req.body.id,
//         },
//       }
//     ).then(function (success) {
//         res.render("transaction/delete.html", {success});
//     })
//     .catch(function (error) {
//         res.render("transaction/delete.html", {error})
//     });
// }

module.exports =  {
    createView,
    createTransaction,
    readView,
    // updateView,
    // updateTransaction,
    // deleteTransaction
};