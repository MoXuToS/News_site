const Models = require("../Models/newsModelArticle.js"); 
exports.addArticle = function (request, response){ 
    response.send("Добавление статьи");
};
exports.getArticleAll = async function(req, res){ 
    let m=await Models.getAll();
    res.render('news', {data:m});

};

exports.getArticle = async function(req, res){ 
    console.log(req.params); 
    let m=await Models.getOne(req.params.idArticle);
    res.render('newsShow', {data:m});
};