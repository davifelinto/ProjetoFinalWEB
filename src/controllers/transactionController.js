const Transaction = require('../models/transaction')
const Account = require('../models/account');
const { where } = require('sequelize');

function createView(req, res){
    res.render("transaction/createTransaction.html", {});
}

async function createTransaction(req, res){
    let date = new Date()
    let transaction = {
        type: req.body.type,
        date: date.toISOString(),
        value: req.body.value,
        account_origin: req.body.account_origin,
        account_destiny: req.body.account_destiny,
        obs: req.body.obs
    }
    
    await Account.findBy(number, account_origin).then((account_orig)=>{
        let account_1 = {
            id: account_orig.id,
            number: account_orig.number,
            name: account_orig.name,
            open_date: account_orig.open_date,
            balance: account_orig.balance + value
        }
        Account.findBy(number, account_destiny).then((account_dest)=>{
            Account.update(account, { where: {number: account_orig} })
        }).catch((err)=> {
            console.log(err)
            let error = err
            res.render("transaction/createTransaction.html", {error})
        })
    }).catch((err)=> {
        console.log(err)
        let error = err
        res.render("transaction/createTransaction.html", {error})
    })

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
        res.render("transaction/readTransaction.html", {transactions, success_delete, error_delete})
    }).catch((err)=> {
        console.log(err)
        let error = err
        res.render("transaction/readTransaction.html", {error})
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