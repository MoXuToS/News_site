var express = require('express');
const articleController = require("../Controller/articleController.js");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser = require("../Controller/homeController.js");


router.get('/', articleController.getArticleAll);
router.get('/:idArticle', articleController.getArticle);

module.exports = router;