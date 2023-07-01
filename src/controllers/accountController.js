const Account = require('../models/account')

function createView(req, res){
    res.render("account/create.html", {});
}

function createAccount(req, res){
    let date = new Date()
    let newBalance = 0
    let account = {
        number: req.body.number,
        name: req.body.name,
        open_date: date.toISOString(),
        balance: newBalance
    }
    
    Account.create(account).then((result)=>{
        res.render("account/create.html", {account});
    }).catch((err) => {
        console.log(err)
        let error = err
        res.render("account/create.html", {error});
    })
}

function readView(req, res){
    let success_delete = req.query.success_delete
    let error_delete = req.query.error_delete

    Account.findAll().then((accounts)=>{
        res.render("account/read.html", {accounts, success_delete, error_delete})
    }).catch((err)=> {
        console.log(err)
        let error = err
        res.render("account/indexAccount.html", {error})
    })
}

function readSingleView(req, res){
    let id = req.params.id
    let account

    Account.findByPk(id).then((account)=>{
        res.render("account/infoAccount.html", {account})
    }).catch((err)=> {
        console.log(err)
        let error = err
        res.render("account/infoAccount.html", {error})
    })
}

// function updateView(req, res){
//     let id = req.params.id
//     let account
//     Account.findByPk(id).then(function(account){
//         res.render("account/update.html", {account})
//     })
// }

function updateAccount(req, res){
    let account = {
        number: req.body.number,
        name: req.body.name,
        open_date: req.body.open_date,
        balance: req.body.balance
    }
    Account.update(
        account,
        {
            where: {
                id: req.body.id
            },
        }
    ).then(function (success) {
        res.render("account/update.html", {account, success})
    }).catch(function (error) {
        res.render("account/update.html", {account, error})
    })
}

// function deleteAccount(req, res) {
//     Account.destroy(
//       {
//         where: {
//           id: req.body.id,
//         },
//       }
//     ).then(function (success) {
//         res.render("account/delete.html", {success});
//     })
//     .catch(function (error) {
//         res.render("account/delete.html", {error})
//     });
// }

module.exports =  {
    createView,
    createAccount,
    readView,
    readSingleView,
    // updateView,
    updateAccount,
    // deleteAccount
};