function homeView(req, res){
    user = req.session.user, {user}
    res.render("home.html");
}

module.exports =  {
    homeView,
};