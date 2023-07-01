function indexView(req, res){
    // person = req.session.person, {person}
    res.render("index.html");
}

module.exports =  {
    indexView,
};