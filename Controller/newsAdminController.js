const Models = require("../Models/newsModelAdmin.js");

exports.getArticleAll = async function(req, res){
    let m=await Models.getAll(); 
    res.render('adminNews', {data:m});
};

exports.getArticle = async function(req, res){ 
    let m=await Models.getOne(req.params.idArticle); 
    res.render('adminNewsShow', {data:m});
};
exports.addArticle = async function(req, res){
    await Models.addOne(req.body); 
    let m=await Models.getAll(); 
    res.render('adminNews', {data:m});
};
exports.editArticle = async function(req, res){
    await Models.editOne(req.body); 
    let m=await Models.getOne(req.body.idArticle); 
    res.render('adminNewshow', {data:m});
};
exports.deleteArticle = async function(req, res){ 
    // Предполагается, что idArticle передается в запросе
    const idArticle = req.body.idArticle;
    await Models.deleteOne(idArticle); 
    let m=await Models.getAll();
    res.render('adminNews', {data:m});
};